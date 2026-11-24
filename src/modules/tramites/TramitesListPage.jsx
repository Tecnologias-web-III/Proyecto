import { useEffect, useState } from "react";
import { collection, getDocsFromServer, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useAuth } from "../auth/AuthContext";
import "./tramites.css";

const areas = ["Infraestructura", "Nutrición", "Farmacia"];
const estados = ["Registrada", "En Atención", "Resuelta", "Cerrada"];

export default function TramitesListPage() {
  const { user } = useAuth();
  const [area, setArea] = useState("");
  const [estado, setEstado] = useState("");
  const [consulta, setConsulta] = useState(null);
  const uid = user?.uid;

  useEffect(() => {
    if (!uid) return;

    let activa = true;
    const solicitudes = query(
      collection(db, "tramites_comunidad"),
      where("userId", "==", uid),
    );

    getDocsFromServer(solicitudes)
      .then((snapshot) => {
        if (!activa) return;
        const registros = snapshot.docs.map((documento) => ({
          ...documento.data(),
          id: documento.id,
        }));
        setConsulta({ uid, registros, error: false });
      })
      .catch(() => {
        if (activa) setConsulta({ uid, registros: [], error: true });
      });

    return () => {
      activa = false;
    };
  }, [uid]);

  const consultaActual = consulta?.uid === uid ? consulta : null;
  const registros = consultaActual?.registros ?? [];

  const tramites = registros.filter(
    (tramite) => (!area || tramite.area === area) && (!estado || tramite.estado === estado),
  );

  return (
    <section className="page-container tramites-page">
      <header className="page-header">
        <h1>Trámites comunitarios</h1>
        <p>Consulta tus solicitudes por área y estado.</p>
      </header>

      <div className="placeholder-card">
        <div className="tramites-filtros">
          <label>
            Área
            <select value={area} onChange={(event) => setArea(event.target.value)}>
              <option value="">Todas las áreas</option>
              {areas.map((opcion) => <option key={opcion}>{opcion}</option>)}
            </select>
          </label>
          <label>
            Estado
            <select value={estado} onChange={(event) => setEstado(event.target.value)}>
              <option value="">Todos los estados</option>
              {estados.map((opcion) => <option key={opcion}>{opcion}</option>)}
            </select>
          </label>
        </div>

        {!consultaActual && (
          <p className="tramites-resultados" role="status">Cargando trámites…</p>
        )}
        {consultaActual?.error && (
          <p className="tramites-resultados" role="alert">No se pudieron cargar los trámites. Vuelve a intentar recargando la página.</p>
        )}
        {consultaActual && !consultaActual.error && (
          <p className="tramites-resultados" role="status">
            {registros.length === 0
              ? "Todavía no tienes trámites registrados."
              : tramites.length === 0
                ? "No hay trámites que coincidan con los filtros seleccionados."
                : tramites.length === 1
                  ? "1 trámite encontrado"
                  : `${tramites.length} trámites encontrados`}
          </p>
        )}
        {tramites.length > 0 && (
          <div className="tramites-tabla">
            <table className="data-table" aria-label="Listado de trámites comunitarios">
              <thead>
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Área</th>
                  <th scope="col">Prioridad</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {tramites.map((tramite) => (
                  <tr key={tramite.id}>
                    <td>{tramite.codigo}</td>
                    <td>{tramite.descripcion}</td>
                    <td>{tramite.area}</td>
                    <td>{tramite.prioridad}</td>
                    <td>{tramite.estado}</td>
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
