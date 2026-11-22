import { Link } from "react-router-dom";

const enlaces = [
  { to: "/dashboard", label: "Inicio" },
  { to: "/infraestructura", label: "Infraestructura" },
  { to: "/nutricion", label: "Nutrición" },
  { to: "/medicamentos", label: "Medicamentos" },
  { to: "/tramites", label: "Trámites" },
  { to: "/acerca-de", label: "Acerca de" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-column">
          <Link to="/dashboard" className="footer-brand">
            <span className="brand-emblem" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>Costa Rica Conecta</span>
          </Link>
          <p>
            Una plataforma para conectar a las comunidades con reportes de
            infraestructura cantonal, seguimiento nutricional y control de
            medicamentos.
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
          <h2>Información institucional</h2>
          <p>Universidad Técnica Nacional</p>
          <p>Sede del Pacífico</p>
          <p>Ingeniería en Tecnologías de la Información</p>
          <p>Cuatrimestre IIIC 2026</p>
        </section>
      </div>
      <div className="footer-bottom">
        <p>2026 · Costa Rica Conecta · Proyecto académico comunitario.</p>
      </div>
    </footer>
  );
}
