import { Link } from "react-router-dom"
import './Navbar.css'
 

const Navbar = () => {
  return (
     <div className="navbar navbarItem">
  <div className="navbar-center">
   {/*  */}
    <a className="btn btn-ghost normal-case text-xl logo">Travel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
          <li className="list"><Link className="links" to='/'>  Home</Link></li>
          <li className="list"><Link className="links" to='/about'>  About</Link></li>
          <li className="list"><Link className="links" to='/services'>  Services</Link></li>
          <li className="list"><Link className="links" to='/contact'>  Contact</Link></li>
    </ul>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
  </div>
  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box ml-[-70px]">
      <li className="list"><Link className="links" to='/'>  Home</Link></li>
          <li className="list"><Link className="links" to='/about'>  About</Link></li>
          <li className="list"><Link className="links" to='/services'>  Services</Link></li>
          <li className="list"><Link className="links" to='/contact'>  Contact</Link></li>
      </ul>
    </div>
</div>
 
  )
}

export default Navbar