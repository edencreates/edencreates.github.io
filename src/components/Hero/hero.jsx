"use client";
import React from 'react';
import Image from 'next/image';
import './hero.scss';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

  return (
    <div className="Hero">
      <div className="heroCopy_wrapper">
        <h1 className="title">Hi,<br></br>
          <span className="solo_span">I'm</span>
          <span id='typingEffect'>
            <Typewriter 
              words={['Eden Yeung', 'A UX Designer', 'A Researcher', 'A Psych Major', 'A Crafter', 'A Fiber Artist', 'A Cat Mom']}
              typeSpeed={80}
              loop={false}
              cursor={true}
            />
          </span>
        </h1>
      </div> 
      
      <Image
        src="/Ellipse.png"
        width={994}
        height={994}
      />
    </div>
  );
};

export default Hero;
