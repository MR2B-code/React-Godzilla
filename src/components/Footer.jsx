export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="footer-logo-g">G</span>ODZILLA
            </span>
            <span className="footer-kanji" aria-hidden="true">ゴジラ</span>
            <p className="footer-tagline">El Rey de los Monstruos — Desde 1954</p>
          </div>
          <nav className="footer-nav" aria-label="Navegación de pie de página">
            <a href="#inicio">Inicio</a>
            <a href="#historia">Historia</a>
            <a href="#eras">Eras</a>
            <a href="#versiones">Versiones</a>
            <a href="#curiosidades">Curiosidades</a>
          </nav>
        </div>
        <div className="footer-divider" aria-hidden="true" />
        <div className="footer-bottom">
          <p>Godzilla™ &amp; © Toho Co., Ltd. Esta página es un fan site sin fines comerciales.</p>
          <p>Godzilla™ &amp; © 2014–2024 Legendary Pictures.</p>
        </div>
      </div>
    </footer>
  )
}