const milestones = [
  { year: '1945', text: 'Las bombas atómicas de Hiroshima y Nagasaki marcan el inicio de la era nuclear. El miedo a la radiación queda grabado en el inconsciente colectivo japonés.' },
  { year: '1954', text: 'Toho Co., Ltd. estrena la primera película de Godzilla dirigida por Ishirō Honda. La criatura emerge del océano Pacífico como metáfora directa del terror nuclear.' },
  { year: '1955', text: 'El éxito masivo impulsa una secuela. Godzilla comienza su transformación de villano aterrador a icono cultural japonés.' },
  { year: '1984', text: 'Regreso del personaje tras una década de ausencia. La nueva era Heisei reinterpreta a Godzilla con efectos prácticos mejorados y mayor profundidad dramática.' },
  { year: '1999', text: 'La era Millennium renuncia a la continuidad narrativa anterior. Cada película reimagina al monstruo desde cero, experimentando con distintos temas.' },
  { year: '2014', text: 'Legendary Pictures estrena su versión occidental. Gareth Edwards devuelve el horror y la majestuosidad perdidos, redefiniendo a Godzilla para el siglo XXI.' },
]
 
export default function Historia() {
  return (
    <section className="section historia" id="historia">
      <div className="section-inner">
        <div className="historia-grid">
          <div className="historia-text">
            <p className="ember-label">Origen del monstruo</p>
            <h2 className="section-title">Historia &amp; Origen</h2>
            <p className="historia-lead">
              Godzilla nació del miedo colectivo de una nación marcada por la bomba atómica. 
              En 1954, el director Ishirō Honda y el productor Tomoyuki Tanaka crearon una criatura 
              que no era simplemente un monstruo de serie B: era un símbolo, una advertencia, 
              un juicio contra la arrogancia nuclear humana.
            </p>
            <p>
              El nombre combina los vocablos japoneses <em>gorira</em> (gorila) y <em>kujira</em> (ballena), 
              dos de las bestias más imponentes de la naturaleza. Su diseño, inspirado en los dinosaurios 
              y en las imágenes de Hiroshima, fusiona lo ancestral con lo moderno, lo natural con lo radiactivo.
            </p>
            <p>
              Durante siete décadas, Godzilla ha mutado junto con los miedos del tiempo que lo habita: 
              la Guerra Fría, la contaminación ambiental, los desastres nucleares. 
              Cada era reinventa al monstruo sin perder su esencia: la naturaleza tomando venganza.
            </p>
          </div>
 
          <div className="historia-timeline">
            {milestones.map((m, i) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-marker">
                  <span className="timeline-year">{m.year}</span>
                  <span className="timeline-dot" aria-hidden="true" />
                </div>
                <p className="timeline-text">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
 