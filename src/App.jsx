import Navbar from "./components/Navbar";
import Historia from "./components/Historia";
import Peliculas from "./components/Peliculas";
import Kaijus from "./components/Kaijus";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>GODZILLA</h1>

        <p>
          Explora la historia del rey de los monstruos,
          sus películas, enemigos, eras y curiosidades
          del kaiju más famoso del cine.
        </p>

        <div className="hero-image-placeholder">
          IMAGEN DE GODZILLA
        </div>
      </section>

      <Historia />

      <Peliculas />

      <Kaijus />

      <Timeline />
    </>
  );
}