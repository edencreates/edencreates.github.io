import React from 'react';
import Image from 'next/image';
import './hero.scss';

const Hero = () => {

  return (
    <div className="Hero">
      <div className="heroCopy_wrapper">
        <h1 className="title">Hi,<br></br>
          <span className="solo_span">I'm</span><span id='typingEffect'>Eden Yeung</span>
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
