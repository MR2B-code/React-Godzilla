export default function Curiosidades() {
  const curiosidades = [
    "Godzilla apareció por primera vez en 1954.",
    "El rugido original fue creado manipulando cuerdas de un instrumento.",
    "Godzilla tiene más de 30 películas oficiales.",
    "La franquicia pertenece a Toho.",
    "Godzilla es uno de los personajes más reconocidos del cine japonés."
  ];

  return (
    <section id="curiosidades" className="curiosidades">
      <h2>CURIOSIDADES</h2>

      <div className="curiosidades-grid">
        {curiosidades.map((dato, index) => (
          <div className="curiosidad-card" key={index}>
            <p>{dato}</p>
          </div>
        ))}
      </div>
    </section>
  );
}