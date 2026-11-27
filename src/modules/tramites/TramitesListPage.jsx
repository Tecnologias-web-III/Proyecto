import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { codigoVisible } from "./comprobanteTramite";
import { areas, estados } from "./tramitesData";
import { useGestionTramites } from "./useGestionTramites";
import { useRegistrosTramites } from "./useRegistrosTramites";
import TramitesPdfView from "./TramitesPdfView";
import "./tramites.css";

export default function TramitesListPage() {
  const { user } = useAuth();
  const [area, setArea] = useState("");
  const [estado, setEstado] = useState("");
  const gestor = useGestionTramites(user);
  const [ambito, setAmbito] = useState("propios");
  const todos = Boolean(gestor && ambito === "todos");
  const { registros, cargando, error } = useRegistrosTramites("tramites_comunidad", user.uid, todos);

  const tramites = registros.filter(
    (tramite) => (!area || tramite.area === area) && (!estado || tramite.estado === estado),
  ).sort((a, b) => (b.creadoEn?.seconds ?? 0) - (a.creadoEn?.seconds ?? 0));

  return (
    <section className="page-container tramites-page">
      <header className="page-header">
        <h1>Trámites comunitarios</h1>
        <p>Consulta tus solicitudes por área y estado.</p>
        <div className="tramites-acciones">
          <Link className="btn-primary" to="/tramites/nuevo">Registrar trámite</Link>
        </div>
      </header>

      <section className="placeholder-card tramites-bloque" aria-labelledby="tramites-reporte">
        <h2 id="tramites-reporte">Reporte de trámites</h2>
        <div className="tramites-filtros">
          {gestor && (
            <label>Ámbito
              <select value={ambito} onChange={(event) => setAmbito(event.target.value)}>
                <option value="propios">Mis trámites</option>
                <option value="todos">Todos los trámites</option>
              </select>
            </label>
          )}
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

        {cargando && (
          <p className="tramites-resultados" role="status">Cargando trámites…</p>
        )}
        {error && (
          <p className="tramites-resultados" role="alert">No se pudieron cargar los trámites. Vuelve a intentar recargando la página.</p>
        )}
        {!cargando && !error && (
          <p className="tramites-resultados" role="status">
            {registros.length === 0
              ? (todos ? "No hay trámites registrados." : "Todavía no tienes trámites registrados.")
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
                    <td><Link to={`/tramites/${tramite.id}`}>
                      {codigoVisible(tramite.codigo || tramite.id)}
                    </Link></td>
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
        {!cargando && !error && (
          <div className="tramites-acciones">
            <TramitesPdfView tramites={tramites} area={area} estado={estado} />
          </div>
        )}
      </section>
    </section>
  );
}
