const curiosidades = [
  {
    num: '01',
    titulo: 'El nombre es una fusión',
    texto: '"Godzilla" combina "gorira" (gorila) y "kujira" (ballena) en japonés. En el set de Toho, el apodo del actor de traje era "Gojira" — hasta entonces nadie había pensado en el nombre para la criatura.',
  },
  {
    num: '02',
    titulo: 'El primer traje pesaba 100 kg',
    texto: 'El traje de látex y caucho de 1954 era tan pesado que el actor Haruo Nakajima —quien interpretó a Godzilla durante 18 años— sólo podía usarlo por 3 minutos antes de desmayarse por el calor.',
  },
  {
    num: '03',
    titulo: 'Estrella de Hollywood oficial',
    texto: 'En 2004, Godzilla recibió su propia estrella en el Paseo de la Fama de Hollywood, convirtiéndose en el primer personaje ficticio no humano en recibir ese honor.',
  },
  {
    num: '04',
    titulo: 'Censurado en EE. UU. en 1954',
    texto: 'La versión americana de 1956 ("Godzilla, King of the Monsters!") eliminó toda referencia a Hiroshima y la bomba atómica, añadiendo un personaje estadounidense e insertándolo en escenas ya filmadas.',
  },
  {
    num: '05',
    titulo: 'El rugido más icónico del cine',
    texto: 'El rugido original fue creado frotando un guante de cuero sobre las cuerdas de un contrabajo y luego ralentizando el sonido. Ha sido modificado pero reconocido en cada nueva versión durante 70 años.',
  },
  {
    num: '06',
    titulo: 'Shin Godzilla y Fukushima',
    texto: 'El film de 2016 fue una metáfora directa del desastre nuclear de Fukushima (2011) y la lenta respuesta gubernamental. La criatura se enfría con agua fría — igual que los reactores en emergencia nuclear.',
  },
  {
    num: '07',
    titulo: 'El MonsterVerse más rentable',
    texto: 'La versión de Legendary de 2014 recaudó más de 529 millones de dólares mundialmente con un presupuesto de 160 millones. "Godzilla x Kong: The New Empire" (2024) superó los 570 millones globales.',
  },
  {
    num: '08',
    titulo: 'Mascota nuclear de Japón',
    texto: 'En la cultura pop japonesa, Godzilla ha sido utilizado por la agencia nuclear JAPC como mascota para campañas de energía nuclear pacífica — una paradoja fascinante dado su origen antinuclear.',
  },
  {
    num: '09',
    titulo: 'La escena más costosa de 1954',
    texto: 'La secuencia de destrucción de Tokio en la película original consumió el 70% del presupuesto total. Para 1954, los efectos prácticos de miniaturas eran innovación pura; muchas técnicas fueron inventadas para ese único film.',
  },
  {
    num: '10',
    titulo: 'Especie clasificada oficialmente',
    texto: 'La comunidad científica de biología marina bautizó en 2016 a una especie real de alga marina con el nombre "Godzillius robustus" en honor al monstruo, añadiéndolo literalmente al árbol de la vida.',
  },
  {
    num: '11',
    titulo: 'El hálito atómico como chiste interno',
    texto: 'En los primeros bocetos de Toho, el arma de Godzilla era un aliento de vapor, no radiactivo. Fue el director de arte quien sugirió convertirlo en un "rayo atómico" visible que reflejara el contexto nuclear de la época.',
  },
  {
    num: '12',
    titulo: 'Record Guinness de franquicia',
    texto: 'Godzilla ostenta el Récord Guinness de "franquicia de películas de monstruos más longeva", con producciones continuas desde 1954. Ningún otro monstruo de ficción ha mantenido presencia cinematográfica continua por tanto tiempo.',
  },
]
 
export default function Curiosidades() {
  return (
    <section className="section curiosidades" id="curiosidades">
      <div className="section-inner">
        <p className="ember-label">Datos y secretos</p>
        <h2 className="section-title">Curiosidades</h2>
        <p className="curiosidades-intro">
          Detrás del monstruo hay décadas de historia, paradojas culturales y secretos de producción que hacen de Godzilla un fenómeno único en la historia del cine.
        </p>
 
        <div className="curiosidades-grid">
          {curiosidades.map(c => (
            <article className="curiosidad-card" key={c.num}>
              <span className="curio-num">{c.num}</span>
              <h4 className="curio-titulo">{c.titulo}</h4>
              <p className="curio-texto">{c.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}