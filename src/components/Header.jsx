import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
      <nav className="header__navigation">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>

          <NavLink to="/A-propos">
            <li>À propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
