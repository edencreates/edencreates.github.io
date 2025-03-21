"use client"
import React, { useEffect } from 'react';
import './navbar.scss';
import Link from 'next/link';

const MobileNavbar = () => {

  const closeMenu = () => {
    console.log(document.querySelector('.MobileNavbar'))
    const mobileNavBar = document.querySelector('.MobileNavbar');
    mobileNavBar.style.right = '-250px';
  };

  return (
    <div className="MobileNavbar">
      <div className="navigation_wrapper">
        <svg id="closeMenu" onClick={() => closeMenu()} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="39.0983" y2="-0.5" transform="matrix(0.708135 -0.706077 0.708135 0.706077 1.31311 28.6064)" stroke="black"/>
          <line y1="-0.5" x2="39.0983" y2="-0.5" transform="matrix(-0.708135 -0.706077 -0.708135 0.706077 28.6869 29)" stroke="black"/>
        </svg>

        <ul className='navChild'>
          <Link href="/about">
          <li>
            About
          </li>
          </Link>
          <li style={{padding: "28px 0"}}>
            Projects
          </li>
          <li>
            Contact Me
          </li>
        </ul>
      </div> 
    </div>
  );
};

export default MobileNavbar;