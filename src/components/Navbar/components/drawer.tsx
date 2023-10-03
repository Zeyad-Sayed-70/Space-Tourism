import React from 'react'
import { DrawerProvider } from './style/drawer.Style';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Drawer = ({isOpen, setIsOpen}) => {
  return (
    <>
    {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    <DrawerProvider isOpen={isOpen}>
      <span className="close" onClick={() => setIsOpen(false)}><AiOutlineClose /></span>
      <ul>
        <Link to="/"><li><span>00</span> home</li></Link>
        <Link to="/destination"><li><span>01</span> destination</li></Link>
        <Link to="/crew"><li><span>02</span> crew</li></Link>
        <Link to="/technology"><li><span>03</span> technology</li></Link>
      </ul>
    </DrawerProvider>
    </>
  )
}

export default Drawer