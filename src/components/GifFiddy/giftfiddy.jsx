"use client"
import Image from 'next/image';
import { Bai_Jamjuree } from 'next/font/google';
import './giftfiddy.scss';

const fadingFont = Bai_Jamjuree   ({
  subsets: ["latin"],
  weight: '400'
});

const GifFiddy = ({gif_file, background_color, text, flex_direction}) => {
  const paddingCon = flex_direction == 'row-reverse' ? `paddingLeft: "180px"` : `paddingRight: '180px'`
  return (
    <div 
      className="GifFiddy" 
      style={{ 
        background: `${background_color}`,
        flexDirection: `${flex_direction}`
      }}
    >
        <div className='image_container'>
          <Image
            src={`/recipeace/gifs/${gif_file}.webp`}
            width={537}
            height={1082}
            className='doubleImage GifFiddyImage'
          />
        </div>
        <div className='text_container'>
          <h2 
            className={`${fadingFont.className}`}
            style={{paddingCon}}
          >{text}</h2>
        </div>
    </div>
  );
};

export default GifFiddy;