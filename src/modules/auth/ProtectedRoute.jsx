import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children, soloAdmin = false }) {
  const { user, loading, esAdmin } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <p>Verificando sesion activa...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (soloAdmin && !esAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}