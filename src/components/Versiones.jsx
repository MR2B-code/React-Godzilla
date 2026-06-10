const versiones = [
  { nombre: 'Godzilla 1954',       apodo: 'Shodai-Goji',     era: 'Shōwa',       altura: '50m',   desc: 'El diseño original. Piel arrugada, ojos pequeños y expresión aterradora. Símbolo del horror nuclear.' },
  { nombre: 'Godzilla 1955',       apodo: 'Gyaku-Goji',      era: 'Shōwa',       altura: '50m',   desc: 'Diseño más refinado con cabeza más redondeada. Primera versión en combate contra otro monstruo.' },
  { nombre: 'Godzilla 1962',       apodo: 'Kinggoji',        era: 'Shōwa',       altura: '50m',   desc: 'Ojos más grandes y expresivos, preparando la transición hacia un personaje más simpático.' },
  { nombre: 'Godzilla 1964',       apodo: 'Mosugoji',        era: 'Shōwa',       altura: '50m',   desc: 'Considerada una de las mejores versiones clásicas. Expresión poderosa y diseño equilibrado.' },
  { nombre: 'Godzilla 1966',       apodo: 'Daisenso-Goji',   era: 'Shōwa',       altura: '50m',   desc: 'Primera versión en combatir en el espacio. Diseño más estilizado con frente prominente.' },
  { nombre: 'Godzilla 1968',       apodo: 'Soshingeki-Goji', era: 'Shōwa',       altura: '50m',   desc: 'El diseño más icónico de la era Shōwa tardía. Aparece en Destroy All Monsters.' },
  { nombre: 'Godzilla 1975',       apodo: 'Megaro-Goji',     era: 'Shōwa',       altura: '50m',   desc: 'Último diseño de la era Shōwa. Ojos más grandes, casi caricaturescos.' },
  { nombre: 'Godzilla 1984',       apodo: '84-Goji',         era: 'Heisei',      altura: '80m',   desc: 'Regreso al horror. Más grande, oscuro y amenazante. Inspirado en los diseños Shōwa tempranos.' },
  { nombre: 'Godzilla 1989',       apodo: 'Bio-Goji',        era: 'Heisei',      altura: '100m',  desc: 'Diseño refinado de la era Heisei. Combate contra Biollante en uno de los mejores filmes de la saga.' },
  { nombre: 'Godzilla 1991',       apodo: 'Ghido-Goji',      era: 'Heisei',      altura: '100m',  desc: 'Ojos más expresivos, diseño más musculoso. Uno de los más populares entre los fans.' },
  { nombre: 'Godzilla 1994',       apodo: 'Moge-Goji',       era: 'Heisei',      altura: '100m',  desc: 'Diseño más estilizado con cuerpo esbelto. Último del traje "clásico" antes de la era Millennium.' },
  { nombre: 'Godzilla 1995',       apodo: 'Burning Godzilla', era: 'Heisei',     altura: '100m',  desc: 'La versión que "muere". Cuerpo en combustión nuclear. Una de las más dramáticas de la saga.' },
  { nombre: 'Godzilla 1999',       apodo: 'Mire-Goji',       era: 'Millennium',  altura: '55m',   desc: 'Regreso a proporciones más clásicas. Ojos angulados y expresión amenazante.' },
  { nombre: 'Godzilla 2001',       apodo: 'GMK Godzilla',    era: 'Millennium',  altura: '60m',   desc: 'La versión más aterradora desde 1954. Ojos completamente blancos y vacíos. Encarna espíritus de guerra.' },
  { nombre: 'Godzilla 2004',       apodo: 'Final Wars Goji', era: 'Millennium',  altura: '100m',  desc: 'La versión más ágil y atlética. Diseño delgado para secuencias de acción espectaculares.' },
  { nombre: 'Godzilla 2014',       apodo: 'Legendary Goji',  era: 'MonsterVerse',altura: '108m',  desc: 'El más grande hasta su momento. Diseño que combina majestuosidad y ferocidad. Referencia directa al original.' },
  { nombre: 'Godzilla 2019',       apodo: 'KOTM Godzilla',   era: 'MonsterVerse',altura: '119m',  desc: 'Diseño mejorado con escamas más pronunciadas. Versión "Burning Godzilla" en el clímax del film.' },
  { nombre: 'Godzilla 2021',       apodo: 'GvK Godzilla',    era: 'MonsterVerse',altura: '119m',  desc: 'Mismo diseño base con nueva coloración azul para el hálito atómico. Protagonista de su mayor combate.' },
  { nombre: 'Shin Godzilla',       apodo: 'Shin-Goji',       era: 'Toho Reiwa',  altura: '118m',  desc: 'La versión más aterradora de la era moderna. Cuatro formas evolutivas. Crítica al gobierno japonés.' },
  { nombre: 'Godzilla Singular Point', apodo: 'Anime Goji',  era: 'Anime',       altura: ''    ,  desc: 'Versión animada para la serie de Netflix. Diseño único inspirado en el original con estética moderna.' },
  { nombre: 'Godzilla x Kong 2024', apodo: 'New Empire Goji',era: 'MonsterVerse',altura: '120m',  desc: 'El más grande del MonsterVerse. Diseño actualizado con nueva coloración rosada en ciertas escenas.' },
]
 
const eraColors = {
  'Shōwa':       '#c84b11',
  'Heisei':      '#1a6b8a',
  'Millennium':  '#8a6a00',
  'MonsterVerse':'#2a5a1a',
  'Toho Reiwa':  '#6a1a6a',
  'Anime':       '#1a4a8a',
}
 
export default function Versiones() {
  return (
    <section className="section versiones" id="versiones">
      <div className="section-inner">
        <p className="ember-label">Evolución del kaiju</p>
        <h2 className="section-title">Versiones de Godzilla</h2>
        <p className="versiones-intro">
          Más de 30 interpretaciones distintas del Rey de los Monstruos, cada una reflejo de su época y su creador.
        </p>
 
        <div className="versiones-grid">
          {versiones.map(v => {
            const color = eraColors[v.era] || '#c84b11'
            return (
              <div className="version-card" key={v.nombre} style={{ '--card-color': color }}>
                <div className="version-card-top">
                  <div className="version-silhouette" aria-hidden="true">
                    <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 5 C18 5, 12 14, 11 24 C10 32, 14 36, 13 44 C12 52, 8 58, 10 66 C12 72, 20 75, 26 74 L26 68 C22 68, 17 65, 18 60 C19 54, 23 50, 24 44 C25 38, 22 33, 23 26 C24 20, 27 15, 30 14 C33 15, 36 20, 37 26 C38 33, 35 38, 36 44 C37 50, 41 54, 42 60 C43 65, 38 68, 34 68 L34 74 C40 75, 48 72, 50 66 C52 58, 48 52, 47 44 C46 36, 50 32, 49 24 C48 14, 42 5, 30 5 Z" fill="currentColor" opacity="0.6"/>
                      <path d="M22 20 L18 12 L23 16 M38 20 L42 12 L37 16 M26 10 L24 4 L28 8 M34 10 L36 4 L32 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="version-badge" style={{ background: color + '22', border: `1px solid ${color}55`, color }}>
                    {v.era}
                  </div>
                </div>
                <div className="version-info">
                  <span className="version-apodo">{v.apodo}</span>
                  <h4 className="version-nombre">{v.nombre}</h4>
                  {v.altura && <span className="version-altura">↕ {v.altura}</span>}
                  <p className="version-desc">{v.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}