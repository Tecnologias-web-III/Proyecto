import { useState } from "react";
import { FileDown } from "lucide-react";
import { cargarFavicon, crearReporteTramites } from "./comprobanteTramite";
import { mostrarFecha } from "./tramitesData";

export default function TramitesPdfView({ tramites, area, estado }) {
  const [generando, setGenerando] = useState(false);
  const [error, setError] = useState(false);

  async function descargar() {
    setGenerando(true);
    setError(false);
    try {
      const favicon = await cargarFavicon();
      const filas = tramites.map((tramite) => ({
        ...tramite,
        codigo: tramite.codigo || tramite.id,
        registro: mostrarFecha(tramite.creadoEn),
      }));
      crearReporteTramites({ area, estado, filas }, favicon).save("Reporte de tramites.pdf");
    } catch {
      setError(true);
    } finally {
      setGenerando(false);
    }
  }

  return (
    <>
      <button type="button" className="btn-secondary tramites-comprobante" onClick={descargar} disabled={generando}>
        <FileDown size={18} aria-hidden="true" />
        {generando ? "Generando PDF…" : "Descargar reporte PDF"}
      </button>
      {error && <p role="alert">No se pudo descargar el reporte. Inténtalo de nuevo.</p>}
    </>
  );
}
