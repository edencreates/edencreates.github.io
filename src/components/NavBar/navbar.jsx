import React from 'react';
import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="Navbar">
      <div className="navigation_wrapper flex">
        <Link className='navChild' href="/">
          <Image 
            src="/logo.png"
            width={72}
            height={72}
          />
        </Link>
        <ul className='navChild'>
          <Link href="/about">
          <li>
            About
          </li>
          </Link>
          <li>
            Projects
          </li>
        </ul>
        <div className='navChild navButtonWrapper'>
          <button>
            Contact Me
          </button>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar;