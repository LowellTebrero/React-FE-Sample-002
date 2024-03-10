import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu.png'
import { useEffect, useState } from 'react';


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 1000 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobobileMenu(false) : setMobobileMenu(true)
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li>About</li>    
            <li>Location</li>
            <li>Features</li>
            <li>Community</li>
            <li className='btn'>Contact</li>
        </ul>
        <img src={menu_icon} className='menu-icon' onClick={toggleMenu}/>
       
    </nav>
  )
}

export default Navbar