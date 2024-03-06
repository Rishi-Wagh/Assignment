import React from 'react'
import './layout.style.css';
import Header from '../header/header';
import LeftNavbar from '../left-Navbar/LeftNavbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='main'>
     <div  className='main-body'>
       <div className="bg-shape1 bg-primary opacity-50 bg-blur"></div>
       <div className="bg-shape2 bg-secondary opacity-50 bg-blur"></div>
        <div className="layout">
          <Header />
          <LeftNavbar />
          <Outlet />
        </div>
    </div>
</div>
  )
}

export default Layout