export default function Kaijus() {

  const kaijus = [
    "King Ghidorah",
    "Mothra",
    "Rodan",
    "Mechagodzilla",
    "Destoroyah",
    "Gigan"
  ];

  return (
   <section id="kaijus" className="kaijus">

      <h2>KAIJUS LEGENDARIOS</h2>

      <div className="kaijus-grid">

        {kaijus.map((kaiju, index) => (
          <div className="kaiju-card" key={index}>

            <div className="kaiju-imagen">
              IMAGEN
            </div>

            <h3>{kaiju}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}