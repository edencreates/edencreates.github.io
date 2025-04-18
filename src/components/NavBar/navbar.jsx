"use client"
import React from 'react';
import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';

function openEmailApp() {
  window.location.href = "mailto:edenyeung0303@gmail.com";
  console.log('ran')
  console.log(window.location.href)
}

const Navbar = () => {
  const openMenu = () => {
    const mobileNavBar = document.querySelector('.MobileNavbar');
    mobileNavBar.style.right = '0px';
  };

  return (
    <nav className="Navbar" id='navBar'>
      <div className="navigation_wrapper flex">
        <Link className='navChild desktopLogo' href="/">
          <Image 
            src="/logo.png"
            width={72}
            height={72}
          />
        </Link>
        <img src="/logo.png" width={36} height={36} className="mobileLogo" onClick={() => openMenu()}/>
        <ul className='navChild'>
          <Link href="/about">
          <li>
            About
          </li>
          </Link>
          <li>
            <Link style={{ color: "black" }} href="#projects">
              Projects
            </Link>
          </li>
        </ul>
        <div className='navChild navButtonWrapper'>
          <button onClick={() => openEmailApp()}>
            Contact Me
          </button>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar;