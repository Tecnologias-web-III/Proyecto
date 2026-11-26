import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../modules/auth/AuthContext";

const enlaces = [
  { to: "/dashboard", label: "Inicio", end: true },
  { to: "/infraestructura", label: "Reportes" },
  { to: "/nutricion", label: "Salud" },
  { to: "/medicamentos", label: "Botiquín" },
  { to: "/tramites", label: "Trámites" },
  { to: "/acerca-de", label: "Acerca de" },
];

export function Navbar() {
  const { user, userData, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setAccountMenuOpen(false);
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
          <img src="/img/Favicon.png" alt="" className="brand-logo" />
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
          <button
            type="button"
            className="navbar-profile"
            aria-label="Abrir menú de usuario"
            aria-expanded={accountMenuOpen}
            aria-haspopup="menu"
            onClick={() => setAccountMenuOpen((isOpen) => !isOpen)}
          >
            {photoURL ? (
              <img src={photoURL} alt="" className="navbar-avatar" />
            ) : (
              <span className="navbar-avatar navbar-avatar-initial">
                {nombre.charAt(0).toUpperCase()}
              </span>
            )}
          </button>
          <span className="user-name">{nombre}</span>
          {accountMenuOpen && (
            <div className="navbar-account-menu" role="menu">
              <Link to="/perfil" role="menuitem">
                Mi perfil
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="btn-logout"
                role="menuitem"
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}