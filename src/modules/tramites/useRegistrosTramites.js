import { useEffect, useState } from "react";
import { observarRegistros } from "./tramitesData";

export function useRegistrosTramites(nombre, uid, todos = false) {
  const [resultado, setResultado] = useState(null);
  const clave = JSON.stringify([nombre, uid, todos]);

  useEffect(() => {
    if (!nombre || !uid) return;
    return observarRegistros(
      nombre, uid, todos,
      (registros) => setResultado({ clave, registros, error: false }),
      () => setResultado({ clave, registros: [], error: true }),
    );
  }, [nombre, uid, todos, clave]);

  const consulta = resultado?.clave === clave ? resultado : null;
  return {
    registros: consulta?.registros ?? [],
    cargando: Boolean(nombre && uid && !consulta),
    error: Boolean(consulta?.error),
  };
}
