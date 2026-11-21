import { jsPDF } from "jspdf";

export default function PdfExportButton({ title = "Reporte", data = "" }) {
  const exportPdf = () => {
    const pdf = new jsPDF();
    pdf.text(title, 10, 10);
    pdf.text(String(data), 10, 20);
    pdf.save(`${title}.pdf`);
  };

  return <button type="button" onClick={exportPdf}>Exportar PDF</button>;
}
