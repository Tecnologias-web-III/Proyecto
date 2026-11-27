import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { areas, coleccionesPorArea, crearTramite, nombreRegistro, prioridades } from "./tramitesData";
import { useRegistrosTramites } from "./useRegistrosTramites";
import "./tramites.css";

export default function TramiteFormPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [registroId, setRegistroId] = useState("");
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const relacionados = useRegistrosTramites(coleccionesPorArea[area], user.uid);

  const guardar = async (event) => {
    event.preventDefault();
    if (guardando) return;
    const datos = new FormData(event.currentTarget);
    setGuardando(true);
    setError("");
    try {
      const id = await crearTramite(user.uid, {
        area, registroId, prioridad: datos.get("prioridad"), descripcion: datos.get("descripcion"),
      });
      navigate(`/tramites/${id}`, { replace: true });
    } catch {
      setError("No se pudo registrar el trámite. Revisa los datos y vuelve a intentarlo.");
      setGuardando(false);
    }
  };

  return (
    <section className="page-container tramites-page">
      <header className="page-header">
        <Link to="/tramites">Volver a trámites</Link>
        <h1>Registrar trámite</h1>
      </header>
      <form className="placeholder-card tramites-form" onSubmit={guardar}>
        <fieldset disabled={guardando}>
          <label>Área
            <select required value={area} onChange={(event) => {
              setArea(event.target.value);
              setRegistroId("");
            }}>
              <option value="">Selecciona un área</option>
              {areas.map((opcion) => <option key={opcion}>{opcion}</option>)}
            </select>
          </label>
          <label>Prioridad
            <select name="prioridad" required defaultValue="Media">
              {prioridades.map((opcion) => <option key={opcion}>{opcion}</option>)}
            </select>
          </label>
          <label>Registro relacionado (opcional)
            <select value={registroId} disabled={!area || relacionados.cargando || relacionados.error}
              onChange={(event) => setRegistroId(event.target.value)}>
              <option value="">Sin vincular</option>
              {relacionados.registros.map((registro) => (
                <option key={registro.id} value={registro.id}>{nombreRegistro(registro)}</option>
              ))}
            </select>
          </label>
          {relacionados.cargando && <p role="status">Cargando registros relacionados…</p>}
          {relacionados.error && <p role="alert">No se pudieron cargar los registros relacionados. Puedes continuar sin vincular uno.</p>}
          <label>Descripción
            <textarea name="descripcion" required maxLength={1000} rows={4} />
          </label>
          {error && <p role="alert">{error}</p>}
          <button className="btn-primary" type="submit">{guardando ? "Registrando…" : "Registrar trámite"}</button>
        </fieldset>
      </form>
    </section>
  );
}
