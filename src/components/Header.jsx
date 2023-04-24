import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__navigation">
        <ul className="header__navigation__links">
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>

          <NavLink to="a-propos">
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
