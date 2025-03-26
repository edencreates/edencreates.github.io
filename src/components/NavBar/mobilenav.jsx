"use client"
import React from 'react';
import './navbar.scss';
import Link from 'next/link';

const MobileNavbar = () => {

  function openEmailApp() {
    window.location.href = "mailto:edenyeung0303@gmail.com";
    console.log('ran')
    console.log(window.location.href)
  }

  const closeMenu = () => {
    const mobileNavBar = document.querySelector('.MobileNavbar');
    mobileNavBar.style.right = '-250px';
  };
  //let projectLink = window?.location?.href == 'https://edencreates.github.io/' ? '#projects' : '/'

  return (
    <div className="MobileNavbar">
      <div className="navigation_wrapper">
        <svg id="closeMenu" onClick={() => closeMenu()} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="39.0983" y2="-0.5" transform="matrix(0.708135 -0.706077 0.708135 0.706077 1.31311 28.6064)" stroke="black"/>
          <line y1="-0.5" x2="39.0983" y2="-0.5" transform="matrix(-0.708135 -0.706077 -0.708135 0.706077 28.6869 29)" stroke="black"/>
        </svg>

        <ul className='navChild'>
          <Link href='/about' onClick={() => closeMenu()}>
          <li>
            About
          </li>
          </Link>

          <Link href='/' onClick={() => closeMenu()}>
            <li style={{padding: "28px 0"}}>
              Home
            </li>
          </Link>

          <li onClick={() => openEmailApp()}>
            Contact Me
          </li>
        </ul>
      </div> 
    </div>
  );
};

export default MobileNavbar;