export default function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <div className="inicio-bg">
        <div className="inicio-scan-lines" aria-hidden="true" />
        <div className="inicio-vignette" aria-hidden="true" />
      </div>
 
      <div className="inicio-content">
        <p className="inicio-eyebrow">TOHO CO., LTD. — DESDE 1954</p>
 
        <h1 className="inicio-title">
          <span className="inicio-title-main">GODZILLA</span>
          <span className="inicio-title-kanji" aria-hidden="true">ゴジラ</span>
        </h1>
 
        <p className="inicio-tagline">
          El Rey de los Monstruos
        </p>
 
        <p className="inicio-desc">
          Nacido del océano profundo y forjado por la radiación nuclear,
          Godzilla no es una amenaza para el hombre — es la respuesta de la naturaleza
          al desequilibrio que el hombre mismo creó. Más de 70 años de terror, mito y leyenda.
        </p>
 
        <div className="inicio-ctas">
          <a href="#historia" className="btn-primary">Descubrir su historia</a>
          <a href="#eras" className="btn-ghost">Explorar eras</a>
        </div>
 
        <div className="inicio-stats">
          <div className="stat">
            <span className="stat-num">70+</span>
            <span className="stat-label">Años de historia</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">38</span>
            <span className="stat-label">Películas oficiales</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">30+</span>
            <span className="stat-label">Versiones del personaje</span>
          </div>
        </div>
      </div>
 
      <div className="inicio-scroll-hint" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-text">SCROLL</span>
      </div>
    </section>
  )
}