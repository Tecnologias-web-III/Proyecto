import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ExternalLink, FileText } from "lucide-react";
import { useAuth } from "../auth/AuthContext";
import { cargarFavicon, codigoVisible, crearComprobante } from "./comprobanteTramite";
import { cambiarEstado, historialComoArray, mostrarFecha, observarTramite, transiciones } from "./tramitesData";
import { useGestionTramites } from "./useGestionTramites";
import "./tramites.css";

const rutasPorArea = {
  Infraestructura: "/infraestructura",
  Nutrición: "/nutricion",
  Farmacia: "/medicamentos",
};

export default function TramiteDetailPage() {
  const { tramiteId } = useParams();
  const { user } = useAuth();
  const gestor = useGestionTramites(user);

  return <Detalle key={`${user.uid}/${tramiteId}/${Boolean(gestor)}`} id={tramiteId} uid={user.uid} gestor={gestor} />;
}

function Detalle({ id, uid, gestor }) {
  const [consulta, setConsulta] = useState(null);
  const [guardando, setGuardando] = useState(false);
  const [aviso, setAviso] = useState(null);
  const [errorPdf, setErrorPdf] = useState(false);
  const [abriendoPdf, setAbriendoPdf] = useState(false);

  useEffect(() => observarTramite(
    id,
    (tramite) => setConsulta({ tramite }),
    () => setConsulta({ tramite: null }),
  ), [id]);

  const tramite = consulta?.tramite;
  const autorizado = tramite && (tramite.userId === uid || gestor);
  const opciones = transiciones[tramite?.estado] ?? [];
  const referencia = tramite?.codigo || id;
  const historial = historialComoArray(tramite?.historial)
    .sort((a, b) => {
      const fechaA = a.fecha?.toDate ? a.fecha.toDate().getTime() : new Date(a.fecha || 0).getTime();
      const fechaB = b.fecha?.toDate ? b.fecha.toDate().getTime() : new Date(b.fecha || 0).getTime();
      return fechaA - fechaB;
    });

  async function verComprobante() {
    setErrorPdf(false);
    const ventana = window.open("", "_blank");
    if (!ventana) {
      setErrorPdf(true);
      return;
    }
    ventana.opener = null;
    setAbriendoPdf(true);
    try {
      const favicon = await cargarFavicon();
      if (ventana.closed) return;
      const pdf = crearComprobante({
        referencia,
        area: tramite.area,
        estado: tramite.estado,
        prioridad: tramite.prioridad,
        descripcion: tramite.descripcion,
        registro: mostrarFecha(tramite.creadoEn),
        actualizacion: mostrarFecha(tramite.actualizadoEn),
        historial: [
          { estado: "Registrada", fecha: mostrarFecha(tramite.creadoEn) },
          ...historial.map((cambio) => ({ ...cambio, fecha: mostrarFecha(cambio.fecha) })),
        ],
      }, favicon);
      const url = URL.createObjectURL(pdf.output("blob"));
      ventana.location.replace(url);
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
    } catch {
      ventana.close();
      setErrorPdf(true);
    } finally {
      setAbriendoPdf(false);
    }
  }

  const actualizar = async (event) => {
    event.preventDefault();
    if (guardando) return;
    const datos = new FormData(event.currentTarget);
    setGuardando(true);
    setAviso(null);
    try {
      await cambiarEstado(id, uid, tramite.estado, datos.get("estado"), datos.get("observacion"));
      setAviso({ texto: "Estado actualizado." });
    } catch (error) {
      setAviso({ error: true, texto: error.code ? "No se pudo actualizar el trámite. Revisa tus permisos y vuelve a intentarlo." : error.message });
    } finally {
      setGuardando(false);
    }
  };

  return (
    <section className="page-container tramites-page">
      <header className="page-header">
        <Link to="/tramites">Volver a trámites</Link>
        <h1>Detalle del trámite</h1>
      </header>
      {!consulta && <p role="status">Cargando trámite…</p>}
      {consulta && !autorizado && <p role="alert">El trámite no existe o no tienes permiso para consultarlo.</p>}
      {autorizado && (
        <>
          <section className="placeholder-card tramites-bloque">
            <p className="tramites-etiqueta">Código de seguimiento</p>
            <h2>{codigoVisible(referencia)}</h2>
            <dl className="tramites-detalle">
              <div><dt>Área</dt><dd>{tramite.area}</dd></div>
              <div><dt>Prioridad</dt><dd>{tramite.prioridad}</dd></div>
              <div><dt>Estado actual</dt><dd>{tramite.estado}</dd></div>
              <div><dt>Fecha de registro</dt><dd>{mostrarFecha(tramite.creadoEn)}</dd></div>
              <div><dt>Última actualización</dt><dd>{mostrarFecha(tramite.actualizadoEn)}</dd></div>
              {tramite.registroId && <div><dt>Registro vinculado</dt><dd>{tramite.registroId}</dd></div>}
            </dl>
            <p className="tramites-descripcion">{tramite.descripcion}</p>
            {tramite.evidenciaUrl && (
              <a
                className="tramites-evidencia"
                href={tramite.evidenciaUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img src={tramite.evidenciaUrl} alt="Evidencia fotográfica del trámite" />
                <span>Ver evidencia del ente responsable</span>
              </a>
            )}
            <div className="tramites-acciones">
              <button type="button" className="btn-primary tramites-comprobante" onClick={verComprobante} disabled={abriendoPdf}
                aria-label="Ver PDF del comprobante en otra pestaña">
                <FileText size={18} aria-hidden="true" />
                {abriendoPdf ? "Abriendo PDF…" : "Ver PDF"}
                <ExternalLink size={15} aria-hidden="true" />
              </button>
              {rutasPorArea[tramite.area] && (
                <Link to={rutasPorArea[tramite.area]}>Ir al módulo de {tramite.area}</Link>
              )}
            </div>
            {errorPdf && <p role="alert">No se pudo abrir el comprobante. Inténtalo de nuevo.</p>}
          </section>

          <section className="placeholder-card tramites-bloque">
            <h2>Historial de cambios</h2>
            <ol className="tramites-historial">
              <li><strong>Registrada</strong> · {mostrarFecha(tramite.creadoEn)}</li>
              {historial.map((cambio, indice) => (
                <li key={indice}>
                  <strong>{cambio.estado}</strong> · {mostrarFecha(cambio.fecha)}
                  {(cambio.autor || cambio.rolEnte) && (
                    <p className="tramites-auditoria-autor">
                      {cambio.autor || "Institución"}{cambio.rolEnte ? ` · ${cambio.rolEnte}` : ""}
                    </p>
                  )}
                  <p className="tramites-descripcion">{cambio.observacion}</p>
                  {cambio.evidenciaUrl && (
                    <a
                      className="tramites-evidencia"
                      href={cambio.evidenciaUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={cambio.evidenciaUrl} alt={`Evidencia de ${cambio.estado}`} />
                      <span>Ver evidencia</span>
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </section>

          {aviso && <p role={aviso.error ? "alert" : "status"}>{aviso.texto}</p>}
          {gestor && opciones.length > 0 && (
            <form key={tramite.estado} className="placeholder-card tramites-form tramites-bloque" onSubmit={actualizar}>
              <h2>Actualizar estado</h2>
              <fieldset disabled={guardando}>
                <label>Nuevo estado
                  <select name="estado" required defaultValue="">
                    <option value="">Selecciona un estado</option>
                    {opciones.map((opcion) => <option key={opcion}>{opcion}</option>)}
                  </select>
                </label>
                <label>Observación técnica
                  <textarea name="observacion" rows={3} maxLength={500} required />
                </label>
                <button type="submit" className="btn-primary">{guardando ? "Guardando…" : "Actualizar estado"}</button>
              </fieldset>
            </form>
          )}
        </>
      )}
    </section>
  );
}
