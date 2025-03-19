import React from 'react';
import Image from 'next/image';
import './footer.scss';

const Footer = () => {

  return (
    <div className="Footer">
      <div className="footer_center">
        <p>edenyeung0303@gmail.com</p>
        <p className="resume">Resume</p>
      </div>
      <div className="goUp">
        <svg width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_17_63)">
          <circle cx="79" cy="78" r="74.25" stroke="black" stroke-width="1.5" shape-rendering="crispEdges"/>
          </g>
          <line x1="79.5303" y1="47.648" x2="56.5892" y2="70.5892" stroke="black" stroke-width="1.5"/>
          <line y1="-0.75" x2="32.4437" y2="-0.75" transform="matrix(0.707107 0.707107 0.707107 -0.707107 79.8824 47.1177)" stroke="black" stroke-width="1.5"/>
          <line x1="79.75" y1="47.1177" x2="79.75" y2="109.765" stroke="black" stroke-width="1.5"/>
          <defs>
          <filter id="filter0_d_17_63" x="0" y="0" width="158" height="158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_63"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_63" result="shape"/>
          </filter>
          </defs>
        </svg>
        <p>Go Up</p>
      </div>
    </div>
  );
};

export default Footer;