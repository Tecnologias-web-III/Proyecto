export function AboutPage() {
  const pilares = [
    {
      numero: "01",
      titulo: "Infraestructura",
      descripcion: "Reporta problemas en vías, alumbrado y espacios públicos.",
    },
    {
      numero: "02",
      titulo: "Salud y nutrición",
      descripcion: "Organiza tus citas y acompaña tus hábitos de bienestar.",
    },
    {
      numero: "03",
      titulo: "Control de medicamentos",
      descripcion: "Lleva un mejor control de tus medicamentos y alertas.",
    },
    {
      numero: "04",
      titulo: "Trámites comunitarios",
      descripcion: "Consulta el avance de tus solicitudes en un solo lugar.",
    },
  ];

  const integrantes = [
    {
      iniciales: "YR",
      nombre: "Yul Reyes Tapia",
      area: "Arquitectura y Usuarios",
    },
    {
      iniciales: "KU",
      nombre: "Kristel Ugalde Amador",
      area: "Infraestructura",
    },
    {
      iniciales: "EG",
      nombre: "Esmeralda Gonzalez Cordoba",
      area: "Nutrición",
    },
    {
      iniciales: "MM",
      nombre: "Maria Murillo Chaves",
      area: "Medicamentos",
    },
    {
      iniciales: "NS",
      nombre: "Nailea Soto Gonzalez",
      area: "Trámites",
    },
  ];

  return (
    <div className="page-container about-page">
      <section className="about-hero">
        <h1>Acerca de Costa Rica Conecta</h1>
        <p className="about-introduction">
          Una plataforma para gestionar reportes ciudadanos, servicios de salud
          y trámites comunitarios en todo Costa Rica.
        </p>
      </section>

      <section className="about-section" aria-labelledby="pillars-heading">
        <div className="section-heading">
          <h2 id="pillars-heading">Pilares del sistema</h2>
        </div>
        <div className="about-grid">
          {pilares.map((pilar) => (
            <article className="about-pillar-card" key={pilar.numero}>
              <span className="pillar-number">{pilar.numero}</span>
              <h3>{pilar.titulo}</h3>
              <p>{pilar.descripcion}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-team-section" aria-labelledby="team-heading">
        <div className="section-heading">
          <h2 id="team-heading">Equipo de desarrollo</h2>
        </div>
        <div className="team-pills">
          {integrantes.map((integrante) => (
            <div className="team-pill" key={integrante.nombre}>
              <span className="team-pill-avatar" aria-hidden="true">
                {integrante.iniciales}
              </span>
              <span className="team-pill-name">{integrante.nombre}</span>
              <span className="team-pill-area">{integrante.area}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
