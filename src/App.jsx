import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./modules/auth/AuthContext";
import { ProtectedRoute } from "./modules/auth/ProtectedRoute";
import { LoginPage } from "./modules/auth/LoginPage";
import { RegisterPage } from "./modules/auth/RegisterPage";
import { ProfilePage } from "./modules/auth/ProfilePage";
import { DashboardPage } from "./modules/dashboard/DashboardPage";
import { AboutPage } from "./modules/dashboard/AboutPage";
import TramitesListPage from "./modules/tramites/TramitesListPage";
import { Navbar } from "./shared/components/Navbar";
import { Footer } from "./shared/components/Footer";

function ModuloEnDesarrollo({ titulo, responsable, descripcion }) {
  return (
    <div className="page-container">
      <div className="placeholder-card">
        <span className="badge-institucional">{responsable}</span>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AuthProvider>
  );
}

function AppLayout() {
  const { user } = useAuth();
  const location = useLocation();
  const mostrarFooter =
    Boolean(user) && !["/login", "/register"].includes(location.pathname);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/acerca-de"
            element={
              <ProtectedRoute>
                <AboutPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/infraestructura"
            element={
              <ProtectedRoute>
                <ModuloEnDesarrollo
                  titulo="Módulo de Infraestructura Cantonal (TicoReporte)"
                  responsable="Asignado a Perfil 2"
                  descripcion="Reportes ciudadanos con evidencia fotográfica, mapa comunitario y catálogo de especialistas."
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/nutricion"
            element={
              <ProtectedRoute>
                <ModuloEnDesarrollo
                  titulo="Módulo de Citas y Progreso Nutricional (NutriStatus)"
                  responsable="Asignado a Perfil 3"
                  descripcion="Gestión de citas nutricionales, cálculo automático de IMC, galería de progreso, metas de hidratación y notificaciones."
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/medicamentos"
            element={
              <ProtectedRoute>
                <ModuloEnDesarrollo
                  titulo="Módulo de Inventario de Medicamentos y Farmacias (MedicApp)"
                  responsable="Asignado a Perfil 4"
                  descripcion="Botiquín personal con alertas de stock bajo, tarjeta digital de emergencia médica y mapa interactivo de farmacias."
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tramites"
            element={
              <ProtectedRoute>
                <TramitesListPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
      {mostrarFooter && <Footer />}
    </div>
  );
}

export default App;
