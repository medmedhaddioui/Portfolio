import { useEffect, useRef, useState } from 'react'
const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Work'], ['contact', 'Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const button = useRef(null)
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus() }
    }
    const resize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('keydown', close)
    window.addEventListener('resize', resize)
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize) }
  }, [])
  return <header className="site-header"><nav aria-label="Main navigation">
    <a className="logo" href="#hero" aria-label="Mohammed Elhaddioui home" onClick={() => setOpen(false)}><svg viewBox="0 0 50 56" aria-hidden="true"><path d="M25 2 48 15v26L25 54 2 41V15Z"/><text x="25" y="35" textAnchor="middle">M</text></svg></a>
    <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /><span /></button>
    <div id="navigation" className={`navigation ${open ? 'is-open' : ''}`}>
      <ol>{links.map(([id, label], i) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}><span>0{i + 1}.</span> {label}</a></li>)}</ol>
      <a className="outline-button resume-button" href="/resume.pdf" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Resume</a>
    </div>
  </nav></header>
}
