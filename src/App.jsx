import Navbar from "./components/Navbar";
import Historia from "./components/Historia";
import Peliculas from "./components/Peliculas";
import Kaijus from "./components/Kaijus";
import Timeline from "./components/Timeline";
import Curiosidades from "./components/Curiosidades";
import Footer from "./components/Footer";
import MonsterVerse from "./components/MonsterVerse";
import Destacado from "./components/Destacado";
import Fondo1 from "./assets/imagenes/Fondo-1.jpg";

export default function App() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>GODZILLA</h1>

        <p>
          Explora la historia del rey de los monstruos, sus películas, enemigos,
          eras y curiosidades del kaiju más famoso del cine.
        </p>
        <div className="hero-image-placeholder">
          <img src={Fondo1} alt="Godzilla" />
        </div>
      </section>

      <Destacado />

      <Historia />

      <Timeline />

      <Peliculas />

      <MonsterVerse />

      <Kaijus />

      <Curiosidades />

      <Footer />
    </>
  );
}
