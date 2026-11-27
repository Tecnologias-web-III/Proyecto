import { useEffect, useMemo, useState } from "react";
import { deleteApp, initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  Timestamp,
  collection,
  doc,
  onSnapshot,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { app, db } from "../../config/firebaseConfig";
import { subirImagen } from "../../shared/utils/storageHelper";
import { historialComoArray } from "../tramites/tramitesData";
import { useAuth } from "../auth/AuthContext";

const CONFIGURACION_ENTES = {
  admin_municipal: {
    area: "Infraestructura",
    bucket: "reportes",
    bandejas: [
      { id: "tramites", nombre: "tramites_comunidad", tipo: "tramite", label: "Trámites Comunitarios" },
      { id: "reportes", nombre: "reportes_infraestructura", tipo: "reporte", label: "Reportes Municipales" },
    ],
  },
  admin_salud: {
    area: "Nutrición",
    bucket: "nutricion",
    bandejas: [
      { id: "tramites", nombre: "tramites_comunidad", tipo: "tramite", label: "Trámites Comunitarios" },
      { id: "citas", nombre: "citas_nutricionales", tipo: "cita", label: "Citas y Salud" },
    ],
  },
  admin_farmacia: {
    area: "Farmacia",
    bucket: "medicamentos",
    bandejas: [
      { id: "tramites", nombre: "tramites_comunidad", tipo: "tramite", label: "Trámites Comunitarios" },
      { id: "medicamentos", nombre: "medicamentos_usuario", tipo: "medicamento", label: "Supervisión Farmacéutica" },
    ],
  },
};

function useColeccion(nombre, habilitada, campo, valor) {
  const [resultado, setResultado] = useState({
    registros: [],
    cargando: habilitada,
    error: false,
  });

  useEffect(() => {
    if (!habilitada) {
      setResultado({ registros: [], cargando: false, error: false });
      return undefined;
    }

    setResultado({ registros: [], cargando: true, error: false });
    const referencia = collection(db, nombre);
    const consulta = campo && valor
      ? query(referencia, where(campo, "==", valor))
      : referencia;

    return onSnapshot(
      consulta,
      (snapshot) => {
        setResultado({
          registros: snapshot.docs.map((registro) => ({
            ...registro.data(),
            id: registro.id,
          })),
          cargando: false,
          error: false,
        });
      },
      (error) => {
        console.error(`Error al escuchar ${nombre}:`, error);
        setResultado({ registros: [], cargando: false, error: true });
      },
    );
  }, [nombre, habilitada, campo, valor]);

  return resultado;
}

function normalizarTexto(valor) {
  return String(valor ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function estadoDe(registro, tipo) {
  return registro.estado
    || registro.status
    || registro.estatus
    || (tipo === "tramite" ? "Registrada" : "Pendiente");
}

function casoCerrado(estado) {
  return ["resuelta", "resuelto", "cerrada", "cerrado"].includes(normalizarTexto(estado));
}

function milisegundosDe(fecha) {
  if (fecha && typeof fecha.toDate === "function") return fecha.toDate().getTime();
  const tiempo = fecha ? new Date(fecha).getTime() : 0;
  return Number.isFinite(tiempo) ? tiempo : 0;
}

function mostrarFecha(fecha) {
  const tiempo = milisegundosDe(fecha);
  return tiempo
    ? new Intl.DateTimeFormat("es-CR", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Costa_Rica",
    }).format(new Date(tiempo))
    : "—";
}

function historialOrdenado(registro) {
  return historialComoArray(registro.historial)
    .slice()
    .sort((a, b) => milisegundosDe(a.fecha) - milisegundosDe(b.fecha));
}

function nombreDe(registro, config) {
  if (config.tipo === "tramite") return registro.codigo || registro.id;
  return registro.titulo
    || registro.nombre
    || registro.nombreCompleto
    || registro.nombreMedicamento
    || registro.nombreEspecialista
    || registro.especialista
    || registro.descripcion
    || registro.id;
}

function evidenciaDe(registro) {
  const historial = historialOrdenado(registro).slice().reverse();
  return registro.evidenciaUrl
    || historial.find((entrada) => entrada.evidenciaUrl)?.evidenciaUrl
    || registro.fotoURL
    || registro.fotoUrl
    || registro.imagenURL
    || registro.imagenUrl
    || registro.imageUrl
    || registro.foto
    || registro.imagen
    || "";
}

function ultimaObservacion(registro) {
  const historial = historialOrdenado(registro).slice().reverse();
  return historial.find((entrada) => entrada.observacion)?.observacion
    || registro.observacionTecnica
    || registro.observacion
    || registro.indicacionesSeguimiento
    || "—";
}

function transicionesDisponibles(estado) {
  const estadoNormalizado = normalizarTexto(estado);
  if (casoCerrado(estado)) return [];
  if (["registrada", "pendiente"].includes(estadoNormalizado)) {
    return ["En Revisión", "En Atención"];
  }
  if (estadoNormalizado === "en revision") {
    return ["En Atención", "Resuelta", "Cerrada"];
  }
  if (estadoNormalizado === "en atencion") {
    return ["Resuelta", "Cerrada"];
  }
  return ["En Revisión", "En Atención", "Resuelta", "Cerrada"];
}

function MensajeColeccion({ datos, vacio }) {
  if (datos.cargando) {
    return <p className="admin-status" role="status">Cargando registros en tiempo real…</p>;
  }
  if (datos.error) {
    return <p className="admin-status admin-error" role="alert">No se pudieron cargar los registros. Revisa los permisos de Firestore e inténtalo de nuevo.</p>;
  }
  if (!datos.registros.length) return <p className="admin-status">{vacio}</p>;
  return null;
}

function VentanaGestion({ titulo, cerrar, children }) {
  return (
    <div className="admin-modal-backdrop" onMouseDown={cerrar}>
      <section
        className="admin-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="admin-modal-heading">
          <h2 id="admin-modal-title">{titulo}</h2>
          <button type="button" className="admin-close" onClick={cerrar} aria-label="Cerrar">
            Cerrar
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}

function crearEvento({ estado, observacion, uid, nombreEnte, rol, evidenciaUrl, tipoEvento = "gestion" }) {
  return {
    estado,
    observacion,
    autor: nombreEnte,
    rolEnte: rol,
    userId: uid,
    fecha: Timestamp.now(),
    evidenciaUrl: evidenciaUrl || "",
    tipoEvento,
  };
}

async function guardarGestion({
  config,
  registro,
  estado,
  observacion,
  enteResponsable,
  indicacionesSeguimiento,
  uid,
  nombreEnte,
  rol,
  evidenciaUrl,
}) {
  const referencia = doc(db, config.nombre, registro.id);
  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(referencia);
    const actual = snapshot.data();
    const estadoActual = actual ? estadoDe(actual, config.tipo) : "";

    if (!actual || normalizarTexto(estadoActual) !== normalizarTexto(estadoDe(registro, config.tipo))) {
      throw new Error("El estado cambió mientras gestionabas el caso. Actualiza la bandeja e inténtalo de nuevo.");
    }
    if (estado !== estadoActual && !transicionesDisponibles(estadoActual).includes(estado)) {
      throw new Error("La transición seleccionada ya no está disponible.");
    }

    const evidenciaFinal = evidenciaUrl || actual.evidenciaUrl || "";
    const entrada = crearEvento({
      estado,
      observacion,
      uid,
      nombreEnte,
      rol,
      evidenciaUrl: evidenciaFinal,
    });
    const actualizacion = {
      estado,
      enteResponsable,
      observacionTecnica: observacion,
      actualizadoEn: serverTimestamp(),
      historial: [...historialComoArray(actual.historial), entrada],
    };

    if (evidenciaUrl) actualizacion.evidenciaUrl = evidenciaUrl;
    if (indicacionesSeguimiento) {
      actualizacion.indicacionesSeguimiento = indicacionesSeguimiento;
    }
    if (casoCerrado(estado)) actualizacion.fechaCierre = Timestamp.now();
    transaction.update(referencia, actualizacion);
  });
}

async function reabrirCaso({ config, registro, uid, nombreEnte, rol }) {
  const referencia = doc(db, config.nombre, registro.id);
  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(referencia);
    const actual = snapshot.data();
    const estadoActual = actual ? estadoDe(actual, config.tipo) : "";
    if (!actual || !casoCerrado(estadoActual)) {
      throw new Error("El caso ya no está cerrado. Actualiza la bandeja.");
    }

    const estado = normalizarTexto(estadoActual).startsWith("resuelt")
      ? "En Revisión"
      : "En Atención";
    const observacion = `Caso reabierto por ${nombreEnte}.`;
    const entrada = crearEvento({
      estado,
      observacion,
      uid,
      nombreEnte,
      rol,
      evidenciaUrl: actual.evidenciaUrl || "",
      tipoEvento: "reapertura",
    });
    transaction.update(referencia, {
      estado,
      enteResponsable: nombreEnte,
      actualizadoEn: serverTimestamp(),
      fechaCierre: null,
      fechaReapertura: Timestamp.now(),
      historial: [...historialComoArray(actual.historial), entrada],
    });
  });
}

function GestionCaso({ gestion, uid, rol, nombreEnte, bucket, guardar, cerrar }) {
  const { config, registro } = gestion;
  const estadoActual = estadoDe(registro, config.tipo);
  const opciones = transicionesDisponibles(estadoActual);
  const evidencia = evidenciaDe(registro);
  const [archivo, setArchivo] = useState(null);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  async function enviar(event) {
    event.preventDefault();
    if (guardando) return;

    const datos = new FormData(event.currentTarget);
    const estado = String(datos.get("estado") || estadoActual);
    const observacion = String(datos.get("observacion") || "").trim();
    const enteResponsable = String(datos.get("enteResponsable") || "").trim();
    const indicacionesSeguimiento = String(datos.get("indicaciones") || "").trim();
    if (!observacion || observacion.length > 1000 || !enteResponsable) {
      setError("Ingresa el ente responsable y una observación técnica de hasta 1000 caracteres.");
      return;
    }

    setGuardando(true);
    setError("");
    let guardado = false;
    try {
      const evidenciaUrl = archivo ? await subirImagen(archivo, bucket) : "";
      await guardarGestion({
        config,
        registro,
        estado,
        observacion,
        enteResponsable,
        indicacionesSeguimiento,
        uid,
        nombreEnte,
        rol,
        evidenciaUrl,
      });
      guardado = true;
    } catch (errorGuardar) {
      console.error(`Error al guardar ${config.nombre}:`, errorGuardar);
      setError(errorGuardar.code
        ? `No se pudo guardar el caso (${errorGuardar.code}).`
        : errorGuardar.message || "No se pudo guardar el caso.");
    } finally {
      setGuardando(false);
    }
    if (guardado) guardar("Cambios guardados.");
  }

  return (
    <VentanaGestion
      titulo={`Gestionar ${nombreDe(registro, config)}`}
      cerrar={() => {
        if (!guardando) cerrar();
      }}
    >
      <dl className="admin-detail-grid">
        <div><dt>Área</dt><dd>{registro.area || config.area}</dd></div>
        <div><dt>Estado</dt><dd>{estadoActual}</dd></div>
        <div><dt>Prioridad</dt><dd>{registro.prioridad || "—"}</dd></div>
        <div><dt>Fecha de registro</dt><dd>{mostrarFecha(registro.creadoEn || registro.fecha)}</dd></div>
      </dl>
      <p className="admin-record-description">
        {registro.descripcion || registro.titulo || nombreDe(registro, config)}
      </p>
      {evidencia && (
        <a className="admin-image-link" href={evidencia} target="_blank" rel="noreferrer">
          <img src={evidencia} alt="Evidencia fotográfica del caso" />
          <span>Ver evidencia actual</span>
        </a>
      )}
      <form className="admin-form" onSubmit={enviar}>
        <label>
          Estado del caso
          <select name="estado" defaultValue={estadoActual} required>
            <option value={estadoActual}>{estadoActual}</option>
            {opciones.map((opcion) => <option key={opcion} value={opcion}>{opcion}</option>)}
          </select>
        </label>
        <label>
          Ente responsable
          <input name="enteResponsable" defaultValue={registro.enteResponsable || nombreEnte} maxLength={120} required />
        </label>
        <label>
          Observación técnica
          <textarea
            name="observacion"
            rows={4}
            maxLength={1000}
            defaultValue={ultimaObservacion(registro) === "—" ? "" : ultimaObservacion(registro)}
            required
          />
        </label>
        {config.tipo === "cita" && (
          <label>
            Indicaciones de seguimiento
            <textarea name="indicaciones" rows={3} maxLength={1000} defaultValue={registro.indicacionesSeguimiento || ""} />
          </label>
        )}
        <label>
          Adjuntar evidencia fotográfica
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setArchivo(event.target.files?.[0] || null)}
          />
        </label>
        {error && <p className="admin-error" role="alert">{error}</p>}
        <button type="submit" className="btn-primary" disabled={guardando}>
          {guardando ? "Guardando…" : "Guardar cambios"}
        </button>
      </form>
    </VentanaGestion>
  );
}

function Evidencia({ registro }) {
  const url = evidenciaDe(registro);
  if (!url) return <span>Sin evidencia</span>;
  return (
    <a className="admin-evidence-link" href={url} target="_blank" rel="noreferrer">
      Ver fotografía
    </a>
  );
}

function BandejaCasos({ config, datos, abrir, onReabrir, mensajeError }) {
  const [vista, setVista] = useState("activos");
  const cerrados = vista === "cerrados";
  const registros = datos.registros.filter((registro) =>
    casoCerrado(estadoDe(registro, config.tipo)) === cerrados,
  );

  return (
    <section className="admin-card">
      <div className="admin-section-heading">
        <div>
          <h2>{config.label}</h2>
          <p>{config.tipo === "tramite" ? `Área a cargo: ${config.area}` : `Gestión de ${config.label.toLowerCase()}.`}</p>
        </div>
      </div>
      <div className="admin-queue-tabs" role="tablist" aria-label={`Cola de ${config.label}`}>
        <button
          type="button"
          role="tab"
          aria-selected={!cerrados}
          className={!cerrados ? "admin-queue-tab is-active" : "admin-queue-tab"}
          onClick={() => setVista("activos")}
        >
          Cola activa
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={cerrados}
          className={cerrados ? "admin-queue-tab is-active" : "admin-queue-tab"}
          onClick={() => setVista("cerrados")}
        >
          Historial / Cerrados (Auditoría)
        </button>
      </div>
      {mensajeError && <p className="admin-error" role="alert">{mensajeError}</p>}
      {datos.cargando && <MensajeColeccion datos={datos} vacio="" />}
      {datos.error && <MensajeColeccion datos={datos} vacio="" />}
      {!datos.cargando && !datos.error && !registros.length && (
        <p className="admin-status">
          {cerrados ? "No hay casos cerrados en la auditoría." : "No hay solicitudes en la cola activa."}
        </p>
      )}
      {!datos.cargando && !datos.error && registros.length > 0 && (
        <div className="admin-table-wrap">
          <table className="data-table admin-table admin-case-table">
            <thead>
              {cerrados ? (
                <tr><th>Solicitud</th><th>Fecha de cierre</th><th>Ente responsable</th><th>Observación</th><th>Evidencia</th><th>Acción</th></tr>
              ) : (
                <tr><th>Solicitud</th><th>Fecha</th><th>Estado</th><th>Observación reciente</th><th>Evidencia</th><th>Acción</th></tr>
              )}
            </thead>
            <tbody>
              {registros.map((registro) => {
                const historial = historialOrdenado(registro);
                const cierre = historial.slice().reverse().find((entrada) => casoCerrado(entrada.estado));
                const observacion = cierre?.observacion || ultimaObservacion(registro);
                return (
                  <tr key={registro.id}>
                    <td>
                      <strong>{nombreDe(registro, config)}</strong>
                      {config.tipo === "tramite" && (
                        <span className="admin-record-subtitle">{registro.descripcion || "Sin descripción"}</span>
                      )}
                    </td>
                    <td>{cerrados
                      ? mostrarFecha(registro.fechaCierre || cierre?.fecha || registro.actualizadoEn)
                      : mostrarFecha(registro.creadoEn || registro.fecha || registro.fechaCita)}
                    </td>
                    {cerrados ? (
                      <>
                        <td>{registro.enteResponsable || cierre?.rolEnte || "—"}</td>
                        <td>{observacion}</td>
                      </>
                    ) : (
                      <>
                        <td><span className="admin-state">{estadoDe(registro, config.tipo)}</span></td>
                        <td>{ultimaObservacion(registro)}</td>
                      </>
                    )}
                    <td><Evidencia registro={registro} /></td>
                    <td>
                      {cerrados ? (
                        <button
                          type="button"
                          className="admin-text-button"
                          onClick={() => onReabrir(config, registro)}
                        >
                          Reabrir caso
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="admin-text-button"
                          onClick={() => abrir(config, registro)}
                        >
                          Gestionar
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function CuentasDelEnte({ rol, nombreEnte, uid }) {
  const cuentas = useColeccion("usuarios", true, "rol", rol);
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [aviso, setAviso] = useState(null);

  async function registrar(event) {
    event.preventDefault();
    if (guardando) return;
    const usuarioCorreo = usuario.trim().toLowerCase();
    if (!nombre.trim()) {
      setAviso({ error: true, texto: "Escribe el nombre completo de la persona." });
      return;
    }
    if (!/^[a-z0-9._%+-]+$/.test(usuarioCorreo)) {
      setAviso({ error: true, texto: "Escribe un nombre de usuario válido antes del dominio institucional." });
      return;
    }

    setGuardando(true);
    setAviso(null);
    const correo = `${usuarioCorreo}@costaricaconecta.cr`;
    let appSecundaria;
    let authSecundario;
    let nuevaCuenta;
    let errorOperacion;

    try {
      appSecundaria = initializeApp(app.options, "SecondaryAdminCreator");
      authSecundario = getAuth(appSecundaria);
      const credencial = await createUserWithEmailAndPassword(authSecundario, correo, contrasena);
      nuevaCuenta = credencial.user;
      await updateProfile(nuevaCuenta, { displayName: nombre.trim() });
      await setDoc(doc(db, "usuarios", nuevaCuenta.uid), {
        nombre: nombre.trim(),
        correo,
        rol,
        creadoPor: uid,
        creadoEn: serverTimestamp(),
      });
    } catch (error) {
      errorOperacion = error;
      if (nuevaCuenta) {
        try {
          await deleteUser(nuevaCuenta);
        } catch (errorLimpieza) {
          console.error("No se pudo revertir la cuenta institucional incompleta:", errorLimpieza);
        }
      }
    } finally {
      if (authSecundario) {
        try {
          await signOut(authSecundario);
        } catch (errorLimpieza) {
          console.error("No se pudo cerrar la sesión secundaria:", errorLimpieza);
          if (!errorOperacion) errorOperacion = errorLimpieza;
        }
      }
      if (appSecundaria) {
        try {
          await deleteApp(appSecundaria);
        } catch (errorLimpieza) {
          console.error("No se pudo eliminar la instancia secundaria:", errorLimpieza);
          if (!errorOperacion) errorOperacion = errorLimpieza;
        }
      }
    }

    if (errorOperacion) {
      console.error("Error al crear la cuenta institucional:", errorOperacion);
      const texto = errorOperacion.code === "auth/email-already-in-use"
        ? "Ese correo institucional ya está registrado."
        : errorOperacion.code === "auth/weak-password"
          ? "La contraseña debe tener al menos 6 caracteres."
          : errorOperacion.code
            ? `No se pudo crear la cuenta (${errorOperacion.code}).`
            : errorOperacion.message || "No se pudo crear la cuenta institucional.";
      setAviso({ error: true, texto });
    } else {
      setNombre("");
      setUsuario("");
      setContrasena("");
      setAviso({ texto: "Cuenta institucional creada." });
    }
    setGuardando(false);
  }

  return (
    <section className="admin-card admin-accounts">
      <div className="admin-section-heading">
        <div>
          <h2>Cuentas del Ente</h2>
          <p>Registra personas autorizadas para {nombreEnte}.</p>
        </div>
      </div>
      <form className="admin-form admin-account-form" onSubmit={registrar}>
        <label>
          Nombre completo
          <input value={nombre} onChange={(event) => setNombre(event.target.value)} maxLength={120} required />
        </label>
        <label>
          Correo institucional
          <span className="admin-domain-field">
            <input
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
              autoComplete="username"
              aria-label="Usuario institucional"
              required
            />
            <span>@costaricaconecta.cr</span>
          </span>
        </label>
        <label>
          Contraseña temporal
          <input
            type="password"
            value={contrasena}
            onChange={(event) => setContrasena(event.target.value)}
            autoComplete="new-password"
            minLength={6}
            required
          />
        </label>
        <p className="admin-role-lock">Rol asignado automáticamente: <strong>{rol}</strong></p>
        {aviso && <p className={aviso.error ? "admin-error" : "admin-success"} role={aviso.error ? "alert" : "status"}>{aviso.texto}</p>}
        <button type="submit" className="btn-primary" disabled={guardando}>
          {guardando ? "Creando cuenta…" : "Crear cuenta del ente"}
        </button>
      </form>

      <div className="admin-account-list">
        <h3>Cuentas activas de {nombreEnte}</h3>
        <MensajeColeccion datos={cuentas} vacio="No hay cuentas registradas con este rol." />
        {!cuentas.cargando && !cuentas.error && cuentas.registros.length > 0 && (
          <div className="admin-table-wrap">
            <table className="data-table admin-table">
              <thead><tr><th>Nombre</th><th>Correo institucional</th><th>Registro</th></tr></thead>
              <tbody>
                {cuentas.registros.map((cuenta) => (
                  <tr key={cuenta.id}>
                    <td>{cuenta.nombre || "Usuario"}</td>
                    <td>{cuenta.correo || "—"}</td>
                    <td>{mostrarFecha(cuenta.creadoEn)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export function AdminPanelPage() {
  const { user, userData, rol, esAdmin, nombreEnte } = useAuth();
  const config = CONFIGURACION_ENTES[rol];
  const area = config?.area || "";
  const tramites = useColeccion("tramites_comunidad", esAdmin, "area", area);
  const reportes = useColeccion("reportes_infraestructura", rol === "admin_municipal");
  const citas = useColeccion("citas_nutricionales", rol === "admin_salud");
  const medicamentos = useColeccion("medicamentos_usuario", rol === "admin_farmacia");
  const [pestana, setPestana] = useState("tramites");
  const [gestion, setGestion] = useState(null);
  const [aviso, setAviso] = useState(null);

  const pestanas = useMemo(() => [
    ...(config?.bandejas || []),
    { id: "cuentas", label: "Cuentas del Ente" },
  ], [config]);

  useEffect(() => {
    if (!pestanas.some((opcion) => opcion.id === pestana)) {
      setPestana(pestanas[0]?.id || "tramites");
      setGestion(null);
    }
  }, [pestanas, pestana]);

  useEffect(() => {
    if (!aviso) return undefined;
    const timer = window.setTimeout(() => setAviso(null), 4500);
    return () => window.clearTimeout(timer);
  }, [aviso]);

  const datosPorNombre = {
    tramites_comunidad: tramites,
    reportes_infraestructura: reportes,
    citas_nutricionales: citas,
    medicamentos_usuario: medicamentos,
  };
  const bandejaActiva = config?.bandejas.find((bandeja) => bandeja.id === pestana);
  const datosIndicadores = (config?.bandejas || []).map((bandeja) => datosPorNombre[bandeja.nombre]);
  const indicadoresCargando = datosIndicadores.some((datos) => datos?.cargando);
  const pendientes = datosIndicadores.reduce((total, datos) => total + (datos?.registros || []).filter((registro) =>
    ["registrada", "pendiente"].includes(normalizarTexto(estadoDe(registro, bandejaActiva?.tipo || "tramite"))),
  ).length, 0);
  const enProceso = datosIndicadores.reduce((total, datos) => total + (datos?.registros || []).filter((registro) =>
    ["en revision", "en atencion", "confirmada"].includes(normalizarTexto(registro.estado || "")),
  ).length, 0);

  async function manejarReapertura(configCaso, registro) {
    setAviso(null);
    try {
      await reabrirCaso({
        config: configCaso,
        registro,
        uid: user.uid,
        nombreEnte,
        rol,
      });
      setAviso({ texto: "Caso reabierto y registrado en la auditoría." });
    } catch (error) {
      console.error(`Error al reabrir ${configCaso.nombre}:`, error);
      setAviso({
        error: true,
        texto: error.code ? `No se pudo reabrir el caso (${error.code}).` : error.message,
      });
    }
  }

  if (!esAdmin || !config) {
    return <section className="page-container"><p role="alert">No tienes acceso a la gestión institucional.</p></section>;
  }

  return (
    <section className="page-container admin-page">
      <header className="admin-hero">
        <div>
          <span className="admin-eyebrow">{nombreEnte} · {area}</span>
          <h1>Gestión Institucional</h1>
          <p>Revisión, evidencia y seguimiento de solicitudes ciudadanas.</p>
        </div>
        <div className="admin-institution">
          <span>Ente responsable</span>
          <strong>{nombreEnte}</strong>
          <small>Área a cargo: {area}</small>
          <small>{userData?.nombre || user?.email || "Administrador"}</small>
        </div>
      </header>

      <section className="admin-metrics" aria-label="Resumen de solicitudes">
        <article className="admin-metric">
          <span>Solicitudes pendientes</span>
          <strong>{indicadoresCargando ? "…" : pendientes}</strong>
        </article>
        <article className="admin-metric admin-metric-process">
          <span>Solicitudes en proceso</span>
          <strong>{indicadoresCargando ? "…" : enProceso}</strong>
        </article>
      </section>

      {aviso && (
        <p className={aviso.error ? "admin-toast admin-error" : "admin-toast admin-success"} role={aviso.error ? "alert" : "status"}>
          {aviso.texto}
        </p>
      )}

      <nav className="admin-tabs" aria-label="Bandejas institucionales" role="tablist">
        {pestanas.map((opcion) => (
          <button
            key={opcion.id}
            type="button"
            role="tab"
            aria-selected={pestana === opcion.id}
            className={pestana === opcion.id ? "admin-tab is-active" : "admin-tab"}
            onClick={() => {
              setPestana(opcion.id);
              setGestion(null);
            }}
          >
            {opcion.label}
          </button>
        ))}
      </nav>

      <div className="admin-tab-content" role="tabpanel">
        {bandejaActiva && (
          <BandejaCasos
            key={bandejaActiva.nombre}
            config={bandejaActiva}
            datos={datosPorNombre[bandejaActiva.nombre]}
            abrir={(configCaso, registro) => setGestion({ config: configCaso, registro })}
            onReabrir={manejarReapertura}
            mensajeError={aviso?.error ? aviso.texto : ""}
          />
        )}
        {pestana === "cuentas" && (
          <CuentasDelEnte rol={rol} nombreEnte={nombreEnte} uid={user.uid} />
        )}
      </div>

      {gestion && (
        <GestionCaso
          key={`${gestion.config.nombre}/${gestion.registro.id}`}
          gestion={gestion}
          uid={user.uid}
          rol={rol}
          nombreEnte={nombreEnte}
          bucket={config.bucket}
          cerrar={() => setGestion(null)}
          guardar={(texto) => {
            setGestion(null);
            setAviso({ texto });
          }}
        />
      )}
    </section>
  );
}
