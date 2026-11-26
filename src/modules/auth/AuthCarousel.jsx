import { useEffect, useState } from "react";

const SLIDES = [
  {
    provincia: "San José",
    imagen: "/img/San José.jpg",
  },
  {
    provincia: "Alajuela",
    imagen: "/img/Alajuela.jpg",
  },
  {
    provincia: "Cartago",
    imagen: "/img/Cartago.jpg",
  },
  {
    provincia: "Heredia",
    imagen: "/img/Heredia.jpg",
  },
  {
    provincia: "Guanacaste",
    imagen: "/img/Guanacaste.jpg",
  },
  {
    provincia: "Puntarenas",
    imagen: "/img/Puntarenas.jpg",
  },
  {
    provincia: "Limón",
    imagen: "/img/Limon.jpg",
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
          alt={`Paisaje de ${slideActual.provincia}`}
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
        <div className="auth-carousel-indicator">
          <span className="auth-province">{slideActual.provincia}</span>
          <div className="auth-carousel-dots" role="tablist" aria-label="Provincias">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.provincia}
                type="button"
                className={`carousel-dot ${idx === indice ? "active" : ""}`}
                onClick={() => setIndice(idx)}
                aria-label={`Ver provincia ${slide.provincia}`}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
