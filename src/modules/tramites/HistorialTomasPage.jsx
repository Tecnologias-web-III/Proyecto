import { useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import ConfirmDialog from "../../shared/components/ConfirmDialog";
import { useAuth } from "../auth/AuthContext";
import { nombreRegistro } from "./tramitesData";
import { useRegistrosTramites } from "./useRegistrosTramites";
import "./tramites.css";

const estados = ["Tomada", "Pendiente", "Omitida"];
const coleccion = "historial_tomas";

export default function HistorialTomasPage() {
  const { user } = useAuth();
  return <Historial key={user.uid} uid={user.uid} />;
}

function Historial({ uid }) {
  const tomas = useRegistrosTramites(coleccion, uid);
  const medicamentos = useRegistrosTramites("medicamentos_usuario", uid);
  const [filtros, setFiltros] = useState({ estado: "", medicamentoId: "", desde: "", hasta: "" });
  const [edicion, setEdicion] = useState(null);
  const [eliminar, setEliminar] = useState(null);
  const [ocupado, setOcupado] = useState(false);
  const [aviso, setAviso] = useState(null);

  const nombres = new Map(tomas.registros.map((toma) => [toma.medicamentoId, toma.medicamentoNombre]));
  medicamentos.registros.forEach((medicamento) => nombres.set(medicamento.id, nombreRegistro(medicamento)));
  const nombre = (toma) => nombres.get(toma.medicamentoId) || "Medicamento no disponible";

  const tomadas = tomas.registros.filter((toma) => toma.estado === "Tomada").length;
  const omitidas = tomas.registros.filter((toma) => toma.estado === "Omitida").length;
  const evaluadas = tomadas + omitidas;
  const rangoInvalido = filtros.desde && filtros.hasta && filtros.desde > filtros.hasta;
  const resultados = tomas.registros.filter((toma) =>
    (!filtros.estado || toma.estado === filtros.estado)
    && (!filtros.medicamentoId || toma.medicamentoId === filtros.medicamentoId)
    && (!filtros.desde || toma.fecha >= filtros.desde)
    && (!filtros.hasta || toma.fecha <= filtros.hasta),
  ).sort((a, b) => `${b.fecha}T${b.hora}`.localeCompare(`${a.fecha}T${a.hora}`));

  function cambiarFiltro(event) {
    const { name, value } = event.target;
    setFiltros((actual) => ({ ...actual, [name]: value }));
  }

  async function guardar(event) {
    event.preventDefault();
    if (ocupado) return;
    const datos = new FormData(event.currentTarget);
    const medicamentoId = datos.get("medicamentoId");
    const medicamento = medicamentos.registros.find((registro) => registro.id === medicamentoId);
    if (!medicamento && (!edicion.id || medicamentoId !== edicion.medicamentoId)) {
      setAviso({ error: true, texto: "Selecciona un medicamento de tu botiquín." });
      return;
    }
    const registro = {
      medicamentoId,
      medicamentoNombre: medicamento ? nombreRegistro(medicamento) : nombre(edicion),
      fecha: datos.get("fecha"),
      hora: datos.get("hora"),
      estado: datos.get("estado"),
      actualizadoEn: serverTimestamp(),
    };
    setOcupado(true);
    setAviso(null);
    try {
      if (edicion.id) {
        await updateDoc(doc(db, coleccion, edicion.id), registro);
      } else {
        await addDoc(collection(db, coleccion), { ...registro, userId: uid, creadoEn: serverTimestamp() });
      }
      setEdicion(null);
      setAviso({ texto: "Toma guardada." });
    } catch {
      setAviso({ error: true, texto: "No se pudo guardar la toma. Revisa tus permisos y vuelve a intentarlo." });
    } finally {
      setOcupado(false);
    }
  }

  async function confirmarEliminacion() {
    if (!eliminar || ocupado) return;
    setOcupado(true);
    setAviso(null);
    try {
      await deleteDoc(doc(db, coleccion, eliminar.id));
      if (edicion?.id === eliminar.id) setEdicion(null);
      setAviso({ texto: "Toma eliminada." });
    } catch {
      setAviso({ error: true, texto: "No se pudo eliminar la toma. Vuelve a intentarlo." });
    } finally {
      setEliminar(null);
      setOcupado(false);
    }
  }

  return (
    <section className="page-container tramites-page">
      <header className="page-header">
        <Link to="/medicamentos">Volver a Botiquín</Link>
        <h1>Historial de tomas</h1>
        <p>Registra y consulta las tomas de los medicamentos de tu botiquín.</p>
        <div className="tramites-acciones">
          <button type="button" className="btn-primary" disabled={ocupado || !medicamentos.registros.length}
            onClick={() => { setEdicion({}); setAviso(null); }}>Registrar toma</button>
        </div>
        {medicamentos.cargando && <p role="status">Cargando tu botiquín…</p>}
        {medicamentos.error && <p role="alert">No se pudieron cargar los medicamentos de tu botiquín.</p>}
        {!medicamentos.cargando && !medicamentos.error && !medicamentos.registros.length && (
          <p>Agrega un medicamento en Botiquín para registrar una toma.</p>
        )}
      </header>

      {aviso && <p role={aviso.error ? "alert" : "status"}>{aviso.texto}</p>}
      {edicion && (
        <form key={edicion.id || "nueva"} className="placeholder-card tramites-form tramites-bloque" onSubmit={guardar}>
          <h2>{edicion.id ? "Editar toma" : "Nueva toma"}</h2>
          <fieldset disabled={ocupado}>
            <label>Medicamento
              <select name="medicamentoId" required defaultValue={edicion.medicamentoId ?? ""}>
                <option value="">Selecciona un medicamento</option>
                {edicion.medicamentoId && !medicamentos.registros.some(({ id }) => id === edicion.medicamentoId) && (
                  <option value={edicion.medicamentoId}>{nombre(edicion)}</option>
                )}
                {medicamentos.registros.map((medicamento) => (
                  <option key={medicamento.id} value={medicamento.id}>{nombreRegistro(medicamento)}</option>
                ))}
              </select>
            </label>
            <label>Fecha <input type="date" name="fecha" required defaultValue={edicion.fecha} /></label>
            <label>Hora <input type="time" name="hora" required defaultValue={edicion.hora} /></label>
            <label>Estado
              <select name="estado" required defaultValue={edicion.estado ?? "Pendiente"}>
                {estados.map((estado) => <option key={estado}>{estado}</option>)}
              </select>
            </label>
            <div className="tramites-acciones">
              <button className="btn-primary" type="submit">{ocupado ? "Guardando…" : "Guardar toma"}</button>
              <button className="btn-secondary" type="button" onClick={() => setEdicion(null)}>Cancelar</button>
            </div>
          </fieldset>
        </form>
      )}

      <section className="placeholder-card tramites-bloque">
        <h2>Adherencia al tratamiento</h2>
        {tomas.cargando && <p role="status">Cargando historial…</p>}
        {tomas.error && <p role="alert">No se pudo cargar el historial de tomas.</p>}
        {!tomas.cargando && !tomas.error && (
          <p>{evaluadas
            ? `${Math.round(100 * tomadas / evaluadas)} % · ${tomadas} tomadas de ${evaluadas} evaluadas`
            : "Todavía no hay tomas tomadas u omitidas para calcular la adherencia."}</p>
        )}
      </section>

      <section className="placeholder-card tramites-bloque">
        <h2>Consultar tomas</h2>
        <div className="tramites-filtros">
          <label>Estado
            <select name="estado" value={filtros.estado} onChange={cambiarFiltro}>
              <option value="">Todos los estados</option>
              {estados.map((estado) => <option key={estado}>{estado}</option>)}
            </select>
          </label>
          <label>Medicamento
            <select name="medicamentoId" value={filtros.medicamentoId} onChange={cambiarFiltro}>
              <option value="">Todos los medicamentos</option>
              {[...nombres].map(([id, etiqueta]) => <option key={id} value={id}>{etiqueta}</option>)}
            </select>
          </label>
          <label>Desde <input name="desde" type="date" value={filtros.desde} onChange={cambiarFiltro} /></label>
          <label>Hasta <input name="hasta" type="date" value={filtros.hasta} onChange={cambiarFiltro} /></label>
        </div>
        {rangoInvalido && <p className="tramites-resultados" role="alert">La fecha inicial debe ser anterior o igual a la final.</p>}
        {!rangoInvalido && !tomas.cargando && !tomas.error && (
          resultados.length ? (
            <div className="tramites-tabla">
              <table className="data-table" aria-label="Tomas de medicamentos">
                <thead><tr><th scope="col">Medicamento</th><th scope="col">Fecha</th><th scope="col">Hora</th>
                  <th scope="col">Estado</th><th scope="col">Acciones</th></tr></thead>
                <tbody>
                  {resultados.map((toma) => (
                    <tr key={toma.id}>
                      <td>{nombre(toma)}</td><td>{toma.fecha}</td><td>{toma.hora}</td><td>{toma.estado}</td>
                      <td><div className="tramites-acciones tramites-acciones-fila">
                        <button className="btn-secondary" disabled={ocupado} type="button"
                          onClick={() => { setEdicion(toma); setAviso(null); }}>Editar</button>
                        <button className="btn-secondary" disabled={ocupado} type="button"
                          onClick={() => setEliminar(toma)}>Eliminar</button>
                      </div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <p className="tramites-resultados" role="status">No hay tomas que mostrar.</p>
        )}
      </section>
      <ConfirmDialog open={Boolean(eliminar)} title="Eliminar toma" danger
        description={eliminar ? `¿Deseas eliminar la toma de ${nombre(eliminar)} del ${eliminar.fecha}?` : undefined}
        confirmLabel="Eliminar" confirmDisabled={ocupado}
        onConfirm={confirmarEliminacion} onCancel={() => { if (!ocupado) setEliminar(null); }} />
    </section>
  );
}
