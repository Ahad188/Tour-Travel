import { Link } from "react-router-dom"
import './Navbar.css'
 

const Navbar = () => {
  return (
    <nav className="navbarItem">
          <h1 className="logo">TrippY</h1>
          <ul className="nav-menu">
               <li className="list"><Link className="links" to='/'>  Home</Link></li>
               <li className="list"><Link className="links" to='/about'>  About</Link></li>
               <li className="list"><Link className="links" to='/services'>  Services</Link></li>
               <li className="list"><Link className="links" to='/contact'>  Contact</Link></li>
          </ul>
    </nav>
  )
}

export default Navbar