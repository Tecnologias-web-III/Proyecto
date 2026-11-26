import { Link } from "react-router-dom";

const enlaces = [
  { to: "/dashboard", label: "Inicio" },
  { to: "/infraestructura", label: "Reportes" },
  { to: "/nutricion", label: "Salud" },
  { to: "/medicamentos", label: "Botiquín" },
  { to: "/tramites", label: "Trámites" },
  { to: "/acerca-de", label: "Acerca de" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-column">
          <Link to="/dashboard" className="footer-brand">
            <img src="/img/Favicon.png" alt="" className="brand-logo" />
            <span>Costa Rica Conecta</span>
          </Link>
          <p>
            Servicios para participar, cuidar el bienestar y dar seguimiento a
            las gestiones de tu comunidad.
          </p>
        </section>

        <nav className="footer-column footer-navigation" aria-label="Enlaces del pie de página">
          <h2>Explora la plataforma</h2>
          <ul>
            {enlaces.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer-column">
          <h2>Conecta con tu comunidad</h2>
          <p>Reportes ciudadanos, salud, botiquín y trámites en un solo lugar.</p>
        </section>
      </div>
      <div className="footer-bottom">
        <p>Costa Rica Conecta · Servicios y bienestar para tu comunidad.</p>
      </div>
    </footer>
  );
}
