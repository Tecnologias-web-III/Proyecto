import { jsPDF } from "jspdf";

export default function PdfExportButton({ title = "Reporte", data = "" }) {
  const exportPdf = () => {
    const pdf = new jsPDF();
    const contenido =
      typeof data === "string" ? data : JSON.stringify(data, null, 2) || "";
    const titulo = String(title);
    const lineas = pdf.splitTextToSize(contenido || "Sin contenido.", 180);
    const altoPagina = pdf.internal.pageSize.getHeight();
    let posicionY = 22;

    pdf.setFontSize(16);
    pdf.text(titulo, 14, 14);
    pdf.setFontSize(10);

    lineas.forEach((linea) => {
      if (posicionY > altoPagina - 14) {
        pdf.addPage();
        posicionY = 14;
      }

      pdf.text(linea, 14, posicionY);
      posicionY += 6;
    });

    const nombreArchivo =
      titulo.trim().replace(/[\\/:*?"<>|]+/g, "-") || "reporte";
    pdf.save(`${nombreArchivo}.pdf`);
  };

  return <button type="button" onClick={exportPdf}>Exportar PDF</button>;
}
