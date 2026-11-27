import { jsPDF } from "jspdf";

const azul = "#0b3552";
const verde = "#137a6b";
const claro = "#e3eef6";
const texto = "#132638";
const tenue = "#516475";
const linea = "#d8e2ea";

export function codigoVisible(referencia) {
  return referencia.replace(/^(CRC-\d{4}-)([A-Za-z0-9]{8})[A-Za-z0-9]{12}$/, "$1$2");
}

export async function cargarFavicon() {
  const respuesta = await fetch(`${import.meta.env.BASE_URL}img/Favicon.png`);
  if (!respuesta.ok) throw new Error("No se pudo cargar el favicon.");
  return new Uint8Array(await respuesta.arrayBuffer());
}

function documento(titulo, favicon) {
  const pdf = new jsPDF({ format: "a4", compress: true });
  const ancho = pdf.internal.pageSize.getWidth();
  const alto = pdf.internal.pageSize.getHeight();
  const margen = 16;
  const contenido = ancho - 2 * margen;
  const fin = alto - 25;
  let y;
  pdf.setProperties({ title: titulo, author: "Costa Rica Conecta" });

  function escribir(valor, x, posicion, { tamano = 10, color = texto, fuerte = false, align = "left" } = {}) {
    pdf.setFont("helvetica", fuerte ? "bold" : "normal");
    pdf.setFontSize(tamano);
    pdf.setTextColor(color);
    pdf.text(String(valor ?? "—"), x, posicion, { align });
  }

  function nuevaPagina(primera = false) {
    if (!primera) pdf.addPage();
    pdf.addImage(favicon, "PNG", margen, 12, 13, 13, "favicon");
    escribir("Costa Rica Conecta", margen + 17, 20, { tamano: 13, color: azul, fuerte: true });
    escribir("Trámites comunitarios", ancho - margen, 20, { color: tenue, align: "right" });
    pdf.setFillColor(verde);
    pdf.rect(margen, 29, contenido, 0.8, "F");
    escribir(titulo, margen, 41, { tamano: 21, color: azul, fuerte: true });
    y = 49;
  }

  function campos(items) {
    const filas = Math.ceil(items.length / 3);
    pdf.setFillColor(claro);
    pdf.roundedRect(margen, y, contenido, filas * 17 + 3, 2, 2, "F");
    items.forEach(([etiqueta, valor], indice) => {
      const x = margen + 5 + (indice % 3) * contenido / 3;
      const fila = y + Math.floor(indice / 3) * 17;
      escribir(etiqueta, x, fila + 7, { tamano: 9, color: tenue, fuerte: true });
      escribir(valor, x, fila + 13, { color: azul, fuerte: true });
    });
    y += filas * 17 + 9;
  }

  function seccion(encabezado) {
    if (y + 18 > fin) nuevaPagina();
    escribir(encabezado, margen, y + 5, { tamano: 13, color: azul, fuerte: true });
    y += 9;
  }

  function parrafo(valor) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    for (const fragmento of pdf.splitTextToSize(valor || "—", contenido)) {
      if (y + 5 > fin) nuevaPagina();
      escribir(fragmento, margen, y + 4);
      y += 5;
    }
    y += 5;
  }

  function tabla(columnas, filas) {
    const cabecera = () => {
      pdf.setFillColor(azul);
      pdf.roundedRect(margen, y, contenido, 9, 1.4, 1.4, "F");
      let x = margen + 3;
      for (const [etiqueta, anchoColumna] of columnas) {
        escribir(etiqueta, x, y + 6, { tamano: 9, color: "#ffffff", fuerte: true });
        x += anchoColumna;
      }
      y += 9;
    };
    if (y + 19 > fin) nuevaPagina();
    cabecera();

    filas.forEach((fila, indice) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      const celdas = fila.map((valor, i) => pdf.splitTextToSize(String(valor || "—"), columnas[i][1] - 6));
      const maximo = Math.max(...celdas.map((celda) => celda.length), 1);
      const altoFila = maximo * 4.5 + 5;
      const capacidadPagina = fin - 49 - 9;
      if (altoFila <= capacidadPagina && y + altoFila > fin) {
        nuevaPagina();
        cabecera();
      }
      for (let inicio = 0; inicio < maximo;) {
        if (y + 9.5 > fin) {
          nuevaPagina();
          cabecera();
        }
        const cantidad = Math.min(maximo - inicio, Math.floor((fin - y - 5) / 4.5));
        const altoBloque = cantidad * 4.5 + 5;
        pdf.setFillColor(indice % 2 === 0 ? "#f3f7fa" : "#ffffff");
        pdf.rect(margen, y, contenido, altoBloque, "F");
        let x = margen + 3;
        for (const [i, celda] of celdas.entries()) {
          celda.slice(inicio, inicio + cantidad).forEach((valor, j) => {
            escribir(valor, x, y + 5.5 + j * 4.5, { tamano: 9 });
          });
          x += columnas[i][1];
        }
        y += altoBloque;
        inicio += cantidad;
      }
      pdf.setDrawColor(linea);
      pdf.line(margen, y, ancho - margen, y);
    });
    y += 6;
  }

  function terminar() {
    const paginas = pdf.getNumberOfPages();
    for (let pagina = 1; pagina <= paginas; pagina++) {
      pdf.setPage(pagina);
      pdf.setDrawColor(linea);
      pdf.line(margen, alto - 19, ancho - margen, alto - 19);
      escribir("Costa Rica Conecta", margen, alto - 12, { tamano: 9, color: tenue });
      escribir(`Página ${pagina} de ${paginas}`, ancho - margen, alto - 12, { tamano: 9, color: tenue, align: "right" });
    }
    return pdf;
  }

  nuevaPagina(true);
  return { campos, seccion, parrafo, tabla, terminar };
}

export function crearComprobante({ referencia, area, prioridad, estado, registro, actualizacion, descripcion, historial }, favicon) {
  const pdf = documento("Comprobante de trámite", favicon);
  pdf.campos([
    ["Código de seguimiento", codigoVisible(referencia)], ["Área", area], ["Estado actual", estado],
    ["Prioridad", prioridad], ["Fecha de registro", registro], ["Última actualización", actualizacion],
  ]);
  pdf.seccion("Descripción de la solicitud");
  pdf.parrafo(descripcion);
  pdf.seccion("Historial de cambios");
  pdf.tabla(
    [["Fecha", 43], ["Estado", 34], ["Observación", 101]],
    historial.map((cambio) => [cambio.fecha, cambio.estado, cambio.observacion]),
  );
  return pdf.terminar();
}

export function crearReporteTramites({ area, estado, filas }, favicon) {
  const pdf = documento("Reporte de trámites", favicon);
  pdf.campos([["Área", area || "Todas"], ["Estado", estado || "Todos"], ["Total de trámites", filas.length]]);
  if (filas.length) {
    pdf.tabla(
      [["Código", 37], ["Área", 25], ["Prioridad", 19], ["Estado", 25], ["Registro", 29], ["Descripción", 43]],
      filas.map(({ codigo, area, prioridad, estado, registro, descripcion }) => [
        codigoVisible(codigo), area, prioridad, estado, registro, descripcion,
      ]),
    );
  } else {
    pdf.parrafo("No hay trámites que coincidan con los filtros seleccionados.");
  }
  return pdf.terminar();
}
