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
  imageHeight,
  arrowColor,
  boxShadow
  }) => {

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <svg style={{fill: `${arrowColor}`}} className='nextArrow' onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={50} width={50}>
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
      </svg>
    );
  }
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <svg style={{fill: `${arrowColor}`}} className='prevArrow' onClick={onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={50} width={50}>
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" transform="scale(-1, 1) translate(-320, 0)" />
      </svg>
  
    )
    
  }
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    rtl: flow_reverse,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          centerMode: true,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        }
      },
    ]
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
          style={{ boxShadow: `${boxShadow ? '4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(0, 0, 0, 0.1' : 'none' }`}}
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
