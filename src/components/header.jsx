import React, { useEffect, useState } from 'react'
import './header.css'
import {Link} from 'react-scroll'
import logo from '../images/logo.png'

export const Header = () => {
  const [ismobile, setIsMobile]=useState(true)
  function hidemenu(){
    setIsMobile((prevState)=>{return !prevState})
  }
  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>10){
        setSticky(true)
      }
    })
  })
  return (
    <div className={sticky?"scrolled":"header"}>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className={ismobile?"menu":"showmenu"}>
            <ul>
              <Link to='hero' smooth={true} offset={0} duration={1000}><li> Home</li></Link> 
              <Link to='programms' smooth={true} offset={-150}><li>Program</li></Link> 
              <Link to='about' smooth={true} offset={-100}><li>About us</li></Link> 
              <Link to='gallery' smooth={true} offset={-150}><li>Campus</li></Link> 
              <Link to='testimonials' smooth={true} offset={-150}><li>Testimonials</li></Link> 
              <Link to='footer' smooth={true} offset={-150}><li><button>Contacts</button></li></Link> 
            </ul>
        </div>
        < img onClick={hidemenu} className='mobile' src="/images/menu-icon.png" alt="" />
    </div>
  )
}
