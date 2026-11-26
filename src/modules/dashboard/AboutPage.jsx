export function AboutPage() {
  const pilares = [
    {
      numero: "01",
      tema: "reports",
      titulo: "Reportes",
      descripcion: "Informa sobre daños y necesidades en espacios de la comunidad.",
    },
    {
      numero: "02",
      tema: "health",
      titulo: "Salud",
      descripcion: "Organiza tus citas y acompaña tus hábitos de bienestar.",
    },
    {
      numero: "03",
      tema: "medicine",
      titulo: "Botiquín",
      descripcion: "Lleva el control de tus medicamentos y recibe alertas.",
    },
    {
      numero: "04",
      tema: "process",
      titulo: "Trámites",
      descripcion: "Consulta y sigue tus gestiones comunitarias en un solo lugar.",
    },
  ];

  const integrantes = [
    {
      iniciales: "YR",
      nombre: "Yul Reyes Tapia",
      area: "Plataforma ciudadana",
      tema: "platform",
    },
    {
      iniciales: "NS",
      nombre: "Nailea Soto Gonzalez",
      area: "Reportes ciudadanos",
      tema: "reports",
    },
    {
      iniciales: "EG",
      nombre: "Esmeralda Gonzalez Cordoba",
      area: "Salud y bienestar",
      tema: "health",
    },
    {
      iniciales: "KU",
      nombre: "Kristel Ugalde Amador",
      area: "Botiquín y farmacias",
      tema: "medicine",
    },
    {
      iniciales: "MM",
      nombre: "Maria Murillo Chaves",
      area: "Trámites comunitarios",
      tema: "process",
    },
  ];

  return (
    <div className="page-container about-page">
      <section className="about-hero">
        <h1>Acerca de Costa Rica Conecta</h1>
        <p className="about-introduction">
          Costa Rica Conecta acerca servicios útiles a las personas y facilita
          la participación, el bienestar y el seguimiento de gestiones en cada
          comunidad.
        </p>
      </section>

      <section className="about-section" aria-labelledby="pillars-heading">
        <div className="section-heading">
          <h2 id="pillars-heading">Lo que ofrecemos</h2>
        </div>
        <div className="about-grid">
          {pilares.map((pilar) => (
            <article className="about-pillar-card" key={pilar.numero}>
              <span className={`pillar-number theme-${pilar.tema}`}>
                {pilar.numero}
              </span>
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
              <span
                className={`team-pill-avatar theme-${integrante.tema}`}
                aria-hidden="true"
              >
                {integrante.iniciales}
              </span>
              <span className="team-pill-name">{integrante.nombre}</span>
              <span className={`team-pill-area theme-${integrante.tema}`}>
                {integrante.area}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
