import { useEffect, useState } from "react";

export function useGestionTramites(user) {
  const [permiso, setPermiso] = useState(null);

  useEffect(() => {
    if (!user) return;
    let activo = true;
    user.getIdTokenResult().then(({ claims }) => {
      if (activo) setPermiso({ user, permitido: claims.admin === true || claims.gestorTramites === true });
    }).catch(() => {
      if (activo) setPermiso({ user, permitido: false });
    });
    return () => { activo = false; };
  }, [user]);

  return permiso?.user === user && permiso.permitido;
}
