import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useAuth } from "../auth/AuthContext";

const imagenHero = "/img/San José.jpg";
const imagenInfraestructura = "/img/Infraestructura.jpg";
const imagenNutricion = "/img/seguro.webp";
const imagenMedicamentos = "/img/medicamentos.jpg";
const imagenTramites = "/img/tramites.jpg";
const estadosFinalizados = new Set([
  "archivado",
  "cancelada",
  "cancelado",
  "cerrada",
  "completado",
  "completada",
  "cerrado",
  "desactivada",
  "desactivado",
  "finalizada",
  "finalizado",
  "inactiva",
  "inactivo",
  "rechazada",
  "rechazado",
  "resuelta",
  "resuelto",
]);

function normalizarTexto(valor) {
  return String(valor || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function registroActivo(registro) {
  if (typeof registro.activo === "boolean") {
    return registro.activo;
  }

  const estado = registro.estado ?? registro.status ?? registro.estatus;
  return !estado || !estadosFinalizados.has(normalizarTexto(estado));
}

function valorNumerico(valor) {
  if (
    valor === null ||
    valor === undefined ||
    (typeof valor === "string" && !valor.trim()) ||
    typeof valor === "boolean"
  ) {
    return null;
  }

  const numero =
    typeof valor === "string"
      ? Number.parseFloat(valor.replace(",", ".").replace("%", "").trim())
      : Number(valor);

  return Number.isFinite(numero) ? numero : null;
}

function fechaRegistro(registro) {
  const valor =
    registro.fecha ??
    registro.fechaCita ??
    registro.creadoEn ??
    registro.createdAt ??
    registro.actualizadoEn;

  if (valor && typeof valor.toDate === "function") {
    return valor.toDate().getTime();
  }

  const fecha = valor ? new Date(valor).getTime() : 0;
  return Number.isFinite(fecha) ? fecha : 0;
}

function ultimoRegistroCon(registros, obtenerValor) {
  return registros
    .map((registro) => ({ registro, valor: obtenerValor(registro) }))
    .filter(({ valor }) => valor !== null)
    .sort(
      (a, b) => fechaRegistro(b.registro) - fechaRegistro(a.registro),
    )[0];
}

function obtenerAvanceHidratacion(registro) {
  const avance =
    registro.avancePorcentaje ??
    registro.porcentajeAvance ??
    registro.progreso ??
    registro.avance ??
    registro.porcentaje;

  if (avance !== undefined) {
    const numero = valorNumerico(avance);
    if (numero !== null) {
      return Math.max(0, Math.min(100, numero <= 1 ? numero * 100 : numero));
    }
  }

  const consumo =
    registro.cantidadConsumida ??
    registro.consumido ??
    registro.vasosConsumidos;
  const meta =
    registro.metaDiaria ??
    registro.meta ??
    registro.objetivo ??
    registro.vasosMeta;
  const cantidad = valorNumerico(consumo);
  const objetivo = valorNumerico(meta);

  if (cantidad !== null && objetivo !== null && objetivo > 0) {
    return Math.max(0, Math.min(100, (cantidad / objetivo) * 100));
  }

  return null;
}

function resumenSalud(citas, metas) {
  const ultimoImc = ultimoRegistroCon(citas, (registro) =>
    valorNumerico(registro.imc),
  );
  const ultimaMeta = ultimoRegistroCon(metas, (registro) =>
    obtenerAvanceHidratacion(registro),
  );
  const resumen = [];

  if (ultimoImc) {
    resumen.push(`Último IMC: ${ultimoImc.valor.toFixed(1)}`);
  }

  if (ultimaMeta) {
    resumen.push(`Hidratación: ${Math.round(ultimaMeta.valor)}%`);
  } else if (metas.length) {
    resumen.push("Meta de hidratación registrada");
  }

  return resumen.join(" · ") || "Sin datos recientes de IMC o hidratación";
}

const datosIniciales = {
  reportes: null,
  citas: null,
  hidratacion: null,
  medicamentos: null,
  tramites: null,
};

export function DashboardPage() {
  const { user, userData } = useAuth();
  const [datos, setDatos] = useState(datosIniciales);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (!user) {
      return undefined;
    }

    setDatos(datosIniciales);
    setErrores({});

    const observarColeccion = (nombre, clave, filtrarPorUsuario = true) => {
      const referencia = collection(db, nombre);
      const fuente = filtrarPorUsuario
        ? query(referencia, where("userId", "==", user.uid))
        : referencia;

      return onSnapshot(
        fuente,
        (snapshot) => {
          setDatos((actual) => ({
            ...actual,
            [clave]: snapshot.docs.map((documento) => documento.data()),
          }));
          setErrores((actual) => ({ ...actual, [clave]: false }));
        },
        (error) => {
          console.error(`Error al cargar ${nombre}:`, error);
          setErrores((actual) => ({ ...actual, [clave]: true }));
        },
      );
    };

    const observadores = [
      observarColeccion("reportes_infraestructura", "reportes", false),
      observarColeccion("citas_nutricionales", "citas"),
      observarColeccion("metas_hidratacion", "hidratacion"),
      observarColeccion("medicamentos_usuario", "medicamentos"),
      observarColeccion("tramites_comunidad", "tramites"),
    ];

    return () => observadores.forEach((dejarDeObservar) => dejarDeObservar());
  }, [user]);

  const reportes = datos.reportes || [];
  const reportesActivos = reportes.filter(registroActivo);
  const reportesAlta = reportesActivos.filter((registro) =>
    ["severidad", "nivelSeveridad", "severity"].some(
      (campo) => normalizarTexto(registro[campo]) === "alta",
    ),
  ).length;
  const citas = datos.citas || [];
  const hidratacion = datos.hidratacion || [];
  const medicamentos = datos.medicamentos || [];
  const medicamentosBajos = medicamentos.filter((registro) => {
    const cantidad = valorNumerico(registro.cantidadDisponible);
    return cantidad !== null && cantidad < 5;
  }).length;
  const tramites = datos.tramites || [];
  const tramitesActivos = tramites.filter(registroActivo).length;
  const resumenActualSalud = resumenSalud(citas, hidratacion);
  const descripcionSalud =
    errores.hidratacion &&
    resumenActualSalud === "Sin datos recientes de IMC o hidratación"
      ? "No se pudo cargar el avance de hidratación."
      : resumenActualSalud;

  const resumen = [
    {
      clase: "metric-primary",
      tema: "reports",
      etiqueta: "Reportes activos",
      total: reportesActivos.length,
      descripcion: `${reportesAlta} con severidad alta`,
      href: "/infraestructura",
      accion: "Ver reportes",
      claveError: "reportes",
    },
    {
      clase: "metric-secondary",
      tema: "health",
      etiqueta: "Citas de salud",
      total: citas.length,
      descripcion: descripcionSalud,
      href: "/nutricion",
      accion: "Ver salud",
      claveError: "citas",
    },
    {
      clase: "metric-nature",
      tema: "medicine",
      etiqueta: "Botiquín personal",
      total: medicamentos.length,
      descripcion:
        medicamentosBajos > 0
          ? `${medicamentosBajos} con menos de 5 unidades`
          : "Sin alertas de stock",
      href: "/medicamentos",
      accion: "Ver botiquín",
      claveError: "medicamentos",
      alerta: medicamentosBajos > 0,
    },
    {
      clase: "metric-warm",
      tema: "process",
      etiqueta: "Trámites",
      total: tramites.length,
      descripcion: `${tramitesActivos} activos`,
      href: "/tramites",
      accion: "Ver trámites",
      claveError: "tramites",
    },
  ];

  const modulos = [
    {
      clase: "module-image-infrastructure",
      tema: "reports",
      imagen: imagenInfraestructura,
      categoria: "Comunidad",
      titulo: "Reportes",
      descripcion: "Reporta daños en vías y espacios públicos.",
      href: "/infraestructura",
      accion: "Ir a Reportes",
    },
    {
      clase: "module-image-nutrition",
      tema: "health",
      imagen: imagenNutricion,
      categoria: "Bienestar",
      titulo: "Salud",
      descripcion: "Organiza citas y metas para cuidar tu salud.",
      href: "/nutricion",
      accion: "Ir a Salud",
    },
    {
      clase: "module-image-medicine",
      tema: "medicine",
      imagen: imagenMedicamentos,
      categoria: "Salud",
      titulo: "Botiquín",
      descripcion: "Lleva control de tus medicamentos y alertas.",
      href: "/medicamentos",
      accion: "Ir al Botiquín",
    },
    {
      clase: "module-image-process",
      tema: "process",
      imagen: imagenTramites,
      categoria: "Servicios",
      titulo: "Trámites",
      descripcion: "Consulta el avance de tus solicitudes.",
      href: "/tramites",
      accion: "Ir a Trámites",
    },
  ];

  return (
    <div className="page-container dashboard-page">
      <section className="dashboard-hero">
        <div className="hero-copy">
          <h1>
            Bienvenido/a, {userData?.nombre || user?.displayName || "Ciudadano"}
          </h1>
          <p>
            Conecta con los servicios de tu comunidad, cuida tu bienestar y da
            seguimiento a tus gestiones en un solo lugar.
          </p>
          <div className="hero-actions">
            <a href="#modules" className="btn-primary">
              Explorar servicios
            </a>
            <Link to="/perfil" className="btn-secondary">
              Mi perfil
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={imagenHero} alt="Paisaje de Costa Rica" />
        </div>
      </section>

      <section className="dashboard-section" aria-labelledby="summary-heading">
        <div className="section-heading">
          <h2 id="summary-heading">Resumen general</h2>
        </div>
        <div className="metrics-grid">
          {resumen.map((item) => {
            return (
              <article className={`metric-card ${item.clase}`} key={item.href}>
                <div className="metric-heading">
                  <span className={`metric-tag theme-${item.tema}`}>
                    {item.etiqueta}
                  </span>
                </div>
                <p className="metric-value">
                  {errores[item.claveError]
                    ? "—"
                    : datos[item.claveError] === null
                      ? "…"
                      : item.total}
                </p>
                <p
                  className={`metric-description${item.alerta ? " is-warning" : ""}`}
                >
                  {errores[item.claveError]
                    ? "No se pudieron cargar los datos."
                    : datos[item.claveError] === null
                      ? "Cargando datos en tiempo real..."
                      : item.descripcion}
                </p>
                <Link to={item.href} className="card-link">
                  {item.accion}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="dashboard-section modules-section"
        id="modules"
        aria-labelledby="modules-heading"
      >
        <div className="section-heading">
          <h2 id="modules-heading">Nuestros servicios</h2>
        </div>
        <div className="modules-grid">
          {modulos.map((modulo) => (
            <article className="module-card" key={modulo.href}>
              <div
                className={`module-image ${modulo.clase}`}
                style={{ "--module-image": `url("${modulo.imagen}")` }}
                aria-hidden="true"
              />
              <div className="module-card-content">
                <span className={`module-category theme-${modulo.tema}`}>
                  {modulo.categoria}
                </span>
                <h3>{modulo.titulo}</h3>
                <p>{modulo.descripcion}</p>
                <Link to={modulo.href} className="module-action">
                  {modulo.accion}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
