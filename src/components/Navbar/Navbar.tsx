import React, { useEffect, useState } from 'react'
import { NavbarProvider, NavContainer } from './style/Navbar.Style'
import { BiMenu } from 'react-icons/bi';
import Drawer from './components/drawer';
import { Link, useLocation } from 'react-router-dom';
import { navList } from './components/constant';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    // reset isOpen to false when resize window
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  })
  function onResize() {
    if ( window.innerWidth >= 767 )
      setIsOpen(false);
  }
  return (
    <NavbarProvider isOpen={isOpen}>
        {/* Right Side Drawer Nav */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavContainer className="container">
            {/* Website Logo */}
            <Link to="/">
              <section className="logo">
                <img src="./favicon.svg" alt="logo" />
              </section>
            </Link>
            {/* Menu-Toggle Small Screens */}
            <section className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                <BiMenu />
            </section>
            {/* Default Nav Normal & Big Screens */}
            <nav>
              <ul>
                {navList.map((list, ind) => (
                  <Link key={ind} className={location.pathname === list.pathname ? 'active' : ''} to={list.pathname}><li><span>{list.id}</span> {list.title}</li></Link>
                ))}
              </ul>
            </nav>
        </NavContainer>
    </NavbarProvider>
  )
}

export default Navbar