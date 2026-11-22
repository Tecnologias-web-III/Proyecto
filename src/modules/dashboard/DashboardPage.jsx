import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getCountFromServer, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { useAuth } from "../auth/AuthContext";
import imagenHero from "../../../images/San José.jpg";
import imagenInfraestructura from "../../../images/Alajuela.jpg";
import imagenNutricion from "../../../images/Cartago.jpg";
import imagenMedicamentos from "../../../images/Heredia.jpg";
import imagenTramites from "../../../images/Puntarenas.jpg";

export function DashboardPage() {
  const { user, userData } = useAuth();
  const [metricas, setMetricas] = useState({
    reportes: 0,
    citas: 0,
    medicamentos: 0,
    tramites: 0,
  });

  useEffect(() => {
    const cargarContadores = async () => {
      if (!user) return;

      const obtenerTotal = async (nombreColeccion, filtrarPorUsuario = false) => {
        try {
          const ref = collection(db, nombreColeccion);
          const consulta = filtrarPorUsuario
            ? query(ref, where("userId", "==", user.uid))
            : ref;
          const snapshot = await getCountFromServer(consulta);
          return snapshot.data().count;
        } catch {
          return 0;
        }
      };

      const [totalReportes, totalCitas, totalMedicamentos, totalTramites] =
        await Promise.all([
          obtenerTotal("reportes_infraestructura", false),
          obtenerTotal("citas_nutricionales", true),
          obtenerTotal("medicamentos_usuario", true),
          obtenerTotal("tramites_comunidad", true),
        ]);

      setMetricas({
        reportes: totalReportes,
        citas: totalCitas,
        medicamentos: totalMedicamentos,
        tramites: totalTramites,
      });
    };

    cargarContadores();
  }, [user]);

  const resumen = [
    {
      clase: "metric-primary",
      etiqueta: "Infraestructura",
      total: metricas.reportes,
      descripcion: "Reportes registrados",
      href: "/infraestructura",
      accion: "Ver reportes",
    },
    {
      clase: "metric-secondary",
      etiqueta: "Salud y nutrición",
      total: metricas.citas,
      descripcion: "Citas de nutrición",
      href: "/nutricion",
      accion: "Ver nutrición",
    },
    {
      clase: "metric-nature",
      etiqueta: "Medicamentos",
      total: metricas.medicamentos,
      descripcion: "Medicamentos registrados",
      href: "/medicamentos",
      accion: "Ver medicamentos",
    },
    {
      clase: "metric-warm",
      etiqueta: "Trámites comunitarios",
      total: metricas.tramites,
      descripcion: "Solicitudes en seguimiento",
      href: "/tramites",
      accion: "Ver trámites",
    },
  ];

  const modulos = [
    {
      clase: "module-image-infrastructure",
      imagen: imagenInfraestructura,
      categoria: "Infraestructura",
      titulo: "Infraestructura",
      descripcion: "Reporta daños en vías y espacios públicos.",
      href: "/infraestructura",
      accion: "Ir a Infraestructura",
    },
    {
      clase: "module-image-nutrition",
      imagen: imagenNutricion,
      categoria: "Bienestar",
      titulo: "Salud y nutrición",
      descripcion: "Organiza citas y metas para cuidar tu salud.",
      href: "/nutricion",
      accion: "Ir a Nutrición",
    },
    {
      clase: "module-image-medicine",
      imagen: imagenMedicamentos,
      categoria: "Salud",
      titulo: "Medicamentos",
      descripcion: "Lleva control de tus medicamentos y alertas.",
      href: "/medicamentos",
      accion: "Ir a Medicamentos",
    },
    {
      clase: "module-image-process",
      imagen: imagenTramites,
      categoria: "Servicios",
      titulo: "Trámites",
      descripcion: "Consulta el avance de tus solicitudes.",
      href: "/tramites",
      accion: "Ir a Trámites",
    },
  ];

  return (
    <div className="page-container dashboard-page">
      <section className="dashboard-hero">
        <div className="hero-copy">
          <h1>
            Bienvenido, {userData?.nombre || user?.displayName || "Ciudadano"}
          </h1>
          <p>
            Gestiona reportes ciudadanos, salud nutricional, medicamentos y
            trámites en Costa Rica.
          </p>
          <div className="hero-actions">
            <a href="#modules" className="btn-primary">
              Explorar módulos
            </a>
            <Link to="/perfil" className="btn-secondary">
              Mi perfil
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={imagenHero} alt="Paisaje de Costa Rica" />
        </div>
      </section>

      <section className="dashboard-section" aria-labelledby="summary-heading">
        <div className="section-heading">
          <h2 id="summary-heading">Resumen en tiempo real</h2>
        </div>
        <div className="metrics-grid">
          {resumen.map((item) => (
            <article className={`metric-card ${item.clase}`} key={item.href}>
              <span className="metric-tag">{item.etiqueta}</span>
              <p className="metric-value">{item.total}</p>
              <p className="metric-description">{item.descripcion}</p>
              <Link to={item.href} className="card-link">
                {item.accion}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        className="dashboard-section modules-section"
        id="modules"
        aria-labelledby="modules-heading"
      >
        <div className="section-heading">
          <h2 id="modules-heading">Módulos de la plataforma</h2>
        </div>
        <div className="modules-grid">
          {modulos.map((modulo) => (
            <article className="module-card" key={modulo.href}>
              <div
                className={`module-image ${modulo.clase}`}
                style={{ "--module-image": `url("${modulo.imagen}")` }}
                aria-hidden="true"
              />
              <div className="module-card-content">
                <span className="module-category">{modulo.categoria}</span>
                <h3>{modulo.titulo}</h3>
                <p>{modulo.descripcion}</p>
                <Link to={modulo.href} className="module-action">
                  {modulo.accion}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
