export default function PeliculaCard(props) {
  return (
    <div className="pelicula-card">

      <div className="pelicula-imagen">
        POSTER
      </div>

      <h3>{props.titulo}</h3>

      <p>{props.descripcion}</p>

      <span>{props.anio}</span>

    </div>
  );
}