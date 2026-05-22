export default function Timeline() {

  const eras = [
    {
      nombre: "Showa Era",
      fecha: "1954 - 1975"
    },

    {
      nombre: "Heisei Era",
      fecha: "1984 - 1995"
    },

    {
      nombre: "Millennium Era",
      fecha: "1999 - 2004"
    },

    {
      nombre: "MonsterVerse",
      fecha: "2014 - Actualidad"
    }
  ];

  return (
    <section className="timeline">

      <h2>ERAS DE GODZILLA</h2>

      <div className="timeline-container">

        {eras.map((era, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-circle"></div>

            <h3>{era.nombre}</h3>

            <p>{era.fecha}</p>

          </div>
        ))}

      </div>

    </section>
  );
}