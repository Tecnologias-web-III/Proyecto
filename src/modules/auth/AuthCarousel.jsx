import { useEffect, useState } from "react";
import imagenSanJose from "../../../images/San José.jpg";
import imagenAlajuela from "../../../images/Alajuela.jpg";
import imagenCartago from "../../../images/Cartago.jpg";
import imagenHeredia from "../../../images/Heredia.jpg";
import imagenGuanacaste from "../../../images/Guanacaste.jpg";
import imagenPuntarenas from "../../../images/Puntarenas.jpg";
import imagenLimon from "../../../images/Limon.jpg";

const SLIDES = [
  {
    provincia: "San José",
    imagen: imagenSanJose,
    titulo: "Participación ciudadana",
    descripcion:
      "Conecta con los servicios de tu comunidad y ayuda a mejorar los espacios públicos.",
  },
  {
    provincia: "Alajuela",
    imagen: imagenAlajuela,
    titulo: "Bienestar para cada comunidad",
    descripcion:
      "Encuentra herramientas para dar seguimiento a tu salud y bienestar cotidiano.",
  },
  {
    provincia: "Cartago",
    imagen: imagenCartago,
    titulo: "Salud más cercana",
    descripcion:
      "Organiza tus citas y metas de bienestar desde un espacio pensado para las personas.",
  },
  {
    provincia: "Heredia",
    imagen: imagenHeredia,
    titulo: "Comunidades conectadas",
    descripcion:
      "Comparte necesidades locales y mantente al tanto de los servicios comunitarios.",
  },
  {
    provincia: "Guanacaste",
    imagen: imagenGuanacaste,
    titulo: "Cuidar también es participar",
    descripcion:
      "Accede a recursos de salud, nutrición y bienestar para acompañar tu día a día.",
  },
  {
    provincia: "Puntarenas",
    imagen: imagenPuntarenas,
    titulo: "Servicios para el bienestar",
    descripcion:
      "Da seguimiento a tus gestiones y encuentra información útil para tu comunidad.",
  },
  {
    provincia: "Limón",
    imagen: imagenLimon,
    titulo: "Una Costa Rica más conectada",
    descripcion:
      "Costa Rica Conecta reúne participación ciudadana, salud y bienestar en un solo lugar.",
  },
];

export function AuthCarousel() {
  const [indice, setIndice] = useState(0);
  const [erroresImg, setErroresImg] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setIndice((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideActual = SLIDES[indice];
  const imagenDisponible = !erroresImg[indice];

  return (
    <aside className="auth-visual-panel">
      {imagenDisponible && (
        <img
          src={slideActual.imagen}
          alt={slideActual.titulo}
          className="auth-carousel-image"
          onError={() =>
            setErroresImg((prev) => ({
              ...prev,
              [indice]: true,
            }))
          }
        />
      )}
      <div className="auth-carousel-overlay" />

      <div className="auth-carousel-content">
        <span className="auth-brand-mark">Costa Rica Conecta</span>
        <span className="auth-province">{slideActual.provincia}</span>
        <h2>{slideActual.titulo}</h2>
        <p>{slideActual.descripcion}</p>

        <div className="auth-carousel-dots" role="tablist" aria-label="Diapositivas">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.titulo}
              type="button"
              className={`carousel-dot ${idx === indice ? "active" : ""}`}
              onClick={() => setIndice(idx)}
              aria-label={`Ver imagen ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
