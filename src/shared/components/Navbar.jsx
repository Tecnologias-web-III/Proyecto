import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../modules/auth/AuthContext";

const enlaces = [
  { to: "/dashboard", label: "Inicio", end: true },
  { to: "/infraestructura", label: "Infraestructura" },
  { to: "/nutricion", label: "Nutrición" },
  { to: "/medicamentos", label: "Medicamentos" },
  { to: "/tramites", label: "Trámites" },
  { to: "/acerca-de", label: "Acerca de" },
];

export function Navbar() {
  const { user, userData, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  if (!user) return null;

  const nombre = userData?.nombre || user.displayName || user.email || "Ciudadano";
  const photoURL = userData?.photoURL || user.photoURL;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className={`navbar${menuOpen ? " menu-open" : ""}`}>
      <div className="navbar-inner">
        <Link to="/dashboard" className="navbar-brand" aria-label="Costa Rica Conecta, inicio">
          <span className="brand-emblem" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>Costa Rica Conecta</span>
        </Link>

        <button
          type="button"
          className="navbar-menu-toggle"
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className="navbar-links"
          id="primary-navigation"
          aria-label="Navegación principal"
        >
          {enlaces.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `navbar-link${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-user">
          <Link
            to="/perfil"
            className="navbar-profile"
            aria-label={`Ver perfil de ${nombre}`}
          >
            {photoURL ? (
              <img src={photoURL} alt="" className="navbar-avatar" />
            ) : (
              <span className="navbar-avatar navbar-avatar-initial">
                {nombre.charAt(0).toUpperCase()}
              </span>
            )}
          </Link>
          <span className="user-name">{nombre}</span>
          <button
            type="button"
            onClick={handleLogout}
            className="btn-logout"
            aria-label="Cerrar sesión"
          >
            Salir
          </button>
        </div>
      </div>
    </header>
  );
}