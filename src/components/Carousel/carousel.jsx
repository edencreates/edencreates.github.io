"use client";
import React, { useEffect } from 'react';
import { Limelight } from 'next/font/google';
import './carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const headingFont = Limelight({
  subsets: ["latin"],
  weight: '400'
});

const Carousel = ({
  header_copy, 
  header_color, 
  background_color, 
  slick_gap, 
  flow_reverse, 
  folder, 
  carousel_number,
  imageWidth,
  imageHeight
  }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    rtl: flow_reverse
  };

  const carouselSlides = [];
  
  // Dynamically generate slide components
  for (let i = 1; i <= carousel_number; i++) {
    carouselSlides.push(
      <div key={i} className="cardContainer">
        <Image
          src={`/recipeace/${folder}/frame${i}.png`}
          width={imageWidth} //321
          height={imageHeight} // 695
          alt={`Frame ${i}`}
        />
      </div>
    );
  }

  return (
    <div style={{background: `#${background_color}`}} className="Carousel">
      <h2 style={{color: `#${header_color}`}} className={`heading_font ${headingFont.className}`}>{header_copy}</h2>
      <Slider {...settings}>
        {carouselSlides}
      </Slider>
    </div>
  );
};

export default Carousel;
