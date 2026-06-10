import { useState } from 'react'
 
const eras = [
  {
    id: 'showa',
    nombre: 'Era Shōwa',
    periodo: '1954 – 1975',
    subtitulo: 'El origen del monstruo',
    descripcion: 'La era fundacional. Godzilla nace como metáfora del horror nuclear japonés y gradualmente evoluciona hacia un antihéroe protector de la humanidad. 15 películas producidas por Toho.',
    color: '#c84b11',
    primeraPelicula: {
      titulo: 'Godzilla',
      anio: '1954',
      img: '/imagenes/poster-1954.jpg',
      director: 'Ishirō Honda',
    },
    peliculas: [
      { titulo: 'Godzilla', anio: '1954-11-03' },
      { titulo: 'Godzilla Raids Again', anio: '1955-04-24' },
      { titulo: 'King Kong vs. Godzilla', anio: '1962-08-11' },
      { titulo: 'Mothra vs. Godzilla', anio: '1964-04-29' },
      { titulo: 'Ghidorah: The Three-Headed Monster', anio: '1964-12-20' },
      { titulo: 'Invasion of Astro-Monster', anio: '1965-12-19' },
      { titulo: 'Ebirah, Horror of the Deep', anio: '1966-12-17' },
      { titulo: 'Son of Godzilla', anio: '1967-12-16' },
      { titulo: 'Destroy All Monsters', anio: '1968-08-01' },
      { titulo: 'All Monsters Attack', anio: '1969-12-20' },
      { titulo: 'Godzilla vs. Hedorah', anio: '1971-07-24' },
      { titulo: 'Godzilla vs. Gigan', anio: '1972-03-12' },
      { titulo: 'Godzilla vs. Megalon', anio: '1973-03-17' },
      { titulo: 'Godzilla vs. Mechagodzilla', anio: '1974-03-21' },
      { titulo: 'Terror of Mechagodzilla', anio: '1975-03-15' },
    ],
  },
  {
    id: 'heisei',
    nombre: 'Era Heisei',
    periodo: '1984 – 1995',
    subtitulo: 'El regreso del terror',
    descripcion: 'Godzilla regresa tras nueve años de silencio, más oscuro y amenazante. La era Heisei construye una narrativa continua con mejores efectos y mayor presupuesto. 7 películas.',
    color: '#1a6b8a',
    primeraPelicula: {
      titulo: 'The Return of Godzilla',
      anio: '1984',
      img: imgHeisei,
      director: 'Koji Hashimoto',
    },
    peliculas: [
      { titulo: 'The Return of Godzilla', anio: '1984-12-15' },
      { titulo: 'Godzilla vs. Biollante', anio: '1989-12-16' },
      { titulo: 'Godzilla vs. King Ghidorah', anio: '1991-12-14' },
      { titulo: 'Godzilla vs. Mothra', anio: '1992-12-12' },
      { titulo: 'Godzilla vs. Mechagodzilla II', anio: '1993-12-11' },
      { titulo: 'Godzilla vs. SpaceGodzilla', anio: '1994-12-10' },
      { titulo: 'Godzilla vs. Destoroyah', anio: '1995-12-09' },
    ],
  },
  {
    id: 'millennium',
    nombre: 'Era Millennium',
    periodo: '1999 – 2004',
    subtitulo: 'Reinvención constante',
    descripcion: 'Cada película es prácticamente independiente. Toho experimenta con distintos enfoques y tonos, desde el horror puro hasta la acción kaiju clásica. 6 películas en 5 años.',
    color: '#8a6a00',
    primeraPelicula: {
      titulo: 'Godzilla 2000: Millennium',
      anio: '1999',
      img: imgMillennium,
      director: 'Takao Okawara',
    },
    peliculas: [
      { titulo: 'Godzilla 2000: Millennium', anio: '1999-07-17' },
      { titulo: 'Godzilla vs. Megaguirus', anio: '2000-11-03' },
      { titulo: 'Godzilla, Mothra & King Ghidorah: Giant Monsters All-Out Attack', anio: '2001-12-15' },
      { titulo: 'Godzilla Against Mechagodzilla', anio: '2002-12-14' },
      { titulo: 'Godzilla: Tokyo S.O.S.', anio: '2003-12-13' },
      { titulo: 'Godzilla: Final Wars', anio: '2004-12-04' },
    ],
  },
  {
    id: 'monsterverse',
    nombre: 'MonsterVerse',
    periodo: '2014 – Presente',
    subtitulo: 'El universo expandido',
    descripcion: 'Legendary Pictures y Warner Bros. crean un universo compartido de titanes. Godzilla regresa con escala épica y efectos digitales sin precedentes. Incluye series de televisión y producciones de streaming.',
    color: '#2a5a1a',
    primeraPelicula: {
      titulo: 'Godzilla (2014)',
      anio: '2014',
      img: imgMonsterverse,
      director: 'Gareth Edwards',
    },
    peliculas: [
      { titulo: 'Godzilla', anio: '2014-05-16' },
      { titulo: 'Kong: Skull Island', anio: '2017-03-10' },
      { titulo: 'Godzilla: King of the Monsters', anio: '2019-05-31' },
      { titulo: 'Godzilla vs. Kong', anio: '2021-03-31' },
      { titulo: 'Godzilla x Kong: The New Empire', anio: '2024-04-12' },
    ],
  },
]
 
export default function Eras() {
  const [openEra, setOpenEra] = useState(null)
 
  const toggle = (id) => setOpenEra(prev => prev === id ? null : id)
 
  return (
    <section className="section eras" id="eras">
      <div className="section-inner">
        <p className="ember-label">Cronología</p>
        <h2 className="section-title">Las Eras de Godzilla</h2>
        <p className="eras-intro">
          Más de siete décadas de historia divididas en cuatro grandes períodos. Cada era refleja el contexto cultural y los miedos de su época.
        </p>
 
        {/* ─── ERA ACCORDION ─────────────────────────── */}
        <div className="eras-accordion">
          {eras.map(era => (
            <div
              key={era.id}
              className={`era-item${openEra === era.id ? ' era-item--open' : ''}`}
              style={{ '--era-color': era.color }}
            >
              <button
                className="era-header"
                onClick={() => toggle(era.id)}
                aria-expanded={openEra === era.id}
              >
                <div className="era-header-left">
                  <span className="era-periodo">{era.periodo}</span>
                  <span className="era-nombre">{era.nombre}</span>
                  <span className="era-subtitulo">{era.subtitulo}</span>
                </div>
                <span className="era-arrow" aria-hidden="true">
                  {openEra === era.id ? '▲' : '▼'}
                </span>
              </button>
 
              {openEra === era.id && (
                <div className="era-body">
                  <p className="era-desc">{era.descripcion}</p>
                  <h4 className="era-film-title">Filmografía completa</h4>
                  <ul className="era-films">
                    {era.peliculas.map(p => (
                      <li key={p.titulo} className="era-film-row">
                        <span className="era-film-name">{p.titulo}</span>
                        <span className="era-film-date">{p.anio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
 
        {/* ─── POSTER GRID ───────────────────────────── */}
        <div className="eras-posters-header">
          <p className="ember-label">Primera película de cada era</p>
          <h3 className="eras-posters-title">Películas Destacadas</h3>
        </div>
        <div className="eras-posters">
          {eras.map(era => (
            <div key={era.id} className="poster-card" style={{ '--era-color': era.color }}>
              <div className="poster-img-wrap">
                <img src={era.primeraPelicula.img} alt={era.primeraPelicula.titulo} />
                <div className="poster-overlay">
                  <span className="poster-era-badge">{era.nombre}</span>
                </div>
              </div>
              <div className="poster-info">
                <span className="poster-anio">{era.primeraPelicula.anio}</span>
                <h4 className="poster-nombre">{era.primeraPelicula.titulo}</h4>
                <span className="poster-director">Dir. {era.primeraPelicula.director}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 