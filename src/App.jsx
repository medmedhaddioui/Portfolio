import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import './App.css'

export default function App() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <aside className="social-rail" aria-label="Social links"><SocialLinks /></aside>
    <aside className="email-rail"><a href="mailto:medmedhaddioui@gmail.com">medmedhaddioui@gmail.com</a></aside>
    <main id="main"><Hero /><About /><Skills /><Projects /><Contact /></main>
    <footer><SocialLinks /><p>Built by Mohammed Elhaddioui</p></footer>
  </>
}
