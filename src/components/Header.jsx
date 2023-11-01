import { useState } from "react";
import { Container , Nav, Navbar, NavbarToggle } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


import logo2 from '../assets/logo2.jpg';

import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

import { Drawer } from '@material-tailwind/react';





const Header = () => {
    let activeStyle = {
        color: "#fec901",
    };


  return (
    
 <Navbar>

        <div className='max-w-[1368px] px-8 mx-auto mt-5 flex justify-between items-end bg-black w-full mb-3 '>
         <a href="/">   <img src={logo2} alt='' className='h-[70px]' /> </a>
            
          
        </div>

      

        
    </Navbar>

      
   
  )
}

export default Header
