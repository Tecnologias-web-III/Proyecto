import {
  collection, doc, onSnapshot, query, runTransaction, serverTimestamp, setDoc, where,
} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const areas = ["Infraestructura", "Nutrición", "Farmacia"];
export const prioridades = ["Baja", "Media", "Alta"];
export const estados = ["Registrada", "En Atención", "Resuelta", "Cerrada"];
export const transiciones = {
  Registrada: ["En Atención"],
  "En Atención": ["Resuelta", "Cerrada"],
  Resuelta: [],
  Cerrada: [],
};
export const clavesHistorial = { "En Atención": "enAtencion", Resuelta: "resuelta", Cerrada: "cerrada" };

export const coleccionesPorArea = {
  Infraestructura: "reportes_infraestructura",
  Nutrición: "citas_nutricionales",
  Farmacia: "medicamentos_usuario",
};

export function observarRegistros(nombre, uid, todos, recibir, fallar) {
  const referencia = collection(db, nombre);
  const consulta = todos ? referencia : query(referencia, where("userId", "==", uid));
  return onSnapshot(consulta, { includeMetadataChanges: true }, (snapshot) => {
    if (snapshot.metadata.fromCache || snapshot.metadata.hasPendingWrites) return;
    recibir(snapshot.docs.map((registro) => ({ ...registro.data(), id: registro.id })));
  }, fallar);
}

export function observarTramite(id, recibir, fallar) {
  return onSnapshot(doc(db, "tramites_comunidad", id), { includeMetadataChanges: true }, (snapshot) => {
    if (snapshot.metadata.fromCache || snapshot.metadata.hasPendingWrites) return;
    recibir(snapshot.exists() ? { ...snapshot.data(), id: snapshot.id } : null);
  }, fallar);
}

export async function crearTramite(uid, { area, prioridad, descripcion, registroId }) {
  const texto = descripcion.trim();
  if (!areas.includes(area) || !prioridades.includes(prioridad) || !texto || texto.length > 1000) {
    throw new Error("Revisa el área, la prioridad y la descripción.");
  }

  const referencia = doc(collection(db, "tramites_comunidad"));
  const anio = new Intl.DateTimeFormat("es-CR", { year: "numeric", timeZone: "America/Costa_Rica" }).format(new Date());
  await setDoc(referencia, {
    userId: uid,
    codigo: `CRC-${anio}-${referencia.id}`,
    area,
    prioridad,
    descripcion: texto,
    registroId: registroId || null,
    estado: "Registrada",
    historial: {},
    creadoEn: serverTimestamp(),
    actualizadoEn: serverTimestamp(),
  });
  return referencia.id;
}

export async function cambiarEstado(id, uid, estadoAnterior, estado, observacion) {
  const texto = observacion.trim();
  if (!texto || texto.length > 500) throw new Error("Ingresa una observación de hasta 500 caracteres.");

  const referencia = doc(db, "tramites_comunidad", id);
  await runTransaction(db, async (transaction) => {
    const snapshot = await transaction.get(referencia);
    const datos = snapshot.data();
    if (!datos || datos.estado !== estadoAnterior || !transiciones[datos.estado]?.includes(estado)) {
      throw new Error("El estado cambió o la transición ya no está disponible. Revisa el historial.");
    }

    transaction.update(referencia, {
      estado,
      actualizadoEn: serverTimestamp(),
      [`historial.${clavesHistorial[estado]}`]: {
        estado, observacion: texto, fecha: serverTimestamp(), userId: uid,
      },
    });
  });
}

export function mostrarFecha(fecha) {
  return fecha?.toDate
    ? new Intl.DateTimeFormat("es-CR", {
      dateStyle: "short", timeStyle: "short", timeZone: "America/Costa_Rica",
    }).format(fecha.toDate())
    : "—";
}

export function nombreRegistro(registro) {
  return registro.nombre || registro.nombreMedicamento || registro.nombreEspecialista
    || registro.titulo || registro.especialista || registro.descripcion || registro.id;
}
