import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const logo = `${import.meta.env.BASE_URL}cusfs-logo.png`

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.brand}>
        <img src={logo} alt="CUSFS" className={styles.logo} />
        <span>CUSFS</span>
      </NavLink>
      <ul className={styles.links}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
            ABOUT
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
