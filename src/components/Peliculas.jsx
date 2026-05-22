import { useState } from "react";
import PeliculaCard from "./PeliculaCard";

export default function Peliculas() {

  const [filtro, setFiltro] = useState("Todas");

  const peliculas = [
    {
      id: 1,
      titulo: "Godzilla (1954)",
      descripcion:
        "La película original japonesa que inició la leyenda.",
      anio: "1954",
      era: "Showa"
    },

    {
      id: 2,
      titulo: "Godzilla vs Mechagodzilla",
      descripcion:
        "Uno de los enemigos más icónicos de Godzilla.",
      anio: "1974",
      era: "Showa"
    },

    {
      id: 3,
      titulo: "Godzilla vs Destoroyah",
      descripcion:
        "Una de las películas más oscuras y emotivas.",
      anio: "1995",
      era: "Heisei"
    },

    {
      id: 4,
      titulo: "Godzilla Final Wars",
      descripcion:
        "Una batalla masiva con múltiples kaijus.",
      anio: "2004",
      era: "Millennium"
    },

    {
      id: 5,
      titulo: "Godzilla vs Kong",
      descripcion:
        "El choque de dos titanes legendarios.",
      anio: "2021",
      era: "MonsterVerse"
    }
  ];

  const peliculasFiltradas =
    filtro === "Todas"
      ? peliculas
      : peliculas.filter(
          (pelicula) => pelicula.era === filtro
        );

  return (
    <section className="peliculas">

      <h2>PELÍCULAS ICÓNICAS</h2>

      <div className="filtros">

        <button onClick={() => setFiltro("Todas")}>
          Todas
        </button>

        <button onClick={() => setFiltro("Showa")}>
          Showa
        </button>

        <button onClick={() => setFiltro("Heisei")}>
          Heisei
        </button>

        <button onClick={() => setFiltro("Millennium")}>
          Millennium
        </button>

        <button onClick={() => setFiltro("MonsterVerse")}>
          MonsterVerse
        </button>

      </div>

      <div className="peliculas-grid">

        {peliculasFiltradas.map((pelicula) => (
          <PeliculaCard
            key={pelicula.id}
            titulo={pelicula.titulo}
            descripcion={pelicula.descripcion}
            anio={pelicula.anio}
          />
        ))}

      </div>

    </section>
  );
}