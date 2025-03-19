import React from 'react';
import Image from 'next/image';
import './navbar.scss';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="Navbar">
      <div className="navigation_wrapper flex">
        <Link href="/">
          <Image 
            src="/logo.png"
            width={72}
            height={72}
          />
        </Link>
        <ul>
          <Link href="/about">
          <li>
            About
          </li>
          </Link>
          <li>
            Projects
          </li>
        </ul>
        <button>
          Contact Me
        </button>
      </div> 
    </nav>
  );
};

export default Navbar;