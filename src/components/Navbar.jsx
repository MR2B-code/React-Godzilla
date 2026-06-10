import { useState, useEffect } from 'react'
 
const links = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#historia',    label: 'Historia' },
  { href: '#eras',        label: 'Eras' },
  { href: '#versiones',   label: 'Versiones' },
  { href: '#curiosidades',label: 'Curiosidades' },
]
 
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
 
  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo">
          <span className="navbar-logo-g">G</span>ODZILLA
        </a>
 
        <button
          className={`navbar-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
 
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}