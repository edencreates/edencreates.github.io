"use client"
import Image from 'next/image';
import './caseStudy.scss';
import { useEffect } from 'react';
import Carousel from '../Carousel/carousel';
import GifFiddy from '../GifFiddy/giftfiddy';

const CaseStudy = () => {

  return (
    <div className="CaseStudy">
      <div style={{maxWidth: '1980px', margin: 'auto'}}>
        <Image
          src="/recipeace/slide1.png"
          width={1920}
          height={1080}
          className='doubleImage caseStudyImage'
        />
        <Image
          src="/recipeace/slide3.png"
          width={1920}
          height={1080}
          className='moveUp caseStudyImage'
        />
        <Image
          src="/recipeace/slide4.png"
          width={1920}
          height={1080}
          className='caseStudyImage'
        />
        <Image
          src="/recipeace/slide5.png"
          width={1920}
          height={1080}
          className='caseStudyImage'
        />
        <Image
          src="/recipeace/slide6.png"
          width={1920}
          height={1080}
          className='doubleImage caseStudyImage'
        />
        <Image
          src="/recipeace/slide6.5.png"
          width={1920}
          height={1080}
          className='doubleImage caseStudyImage'
        />
        <Image
          src="/recipeace/slide7.png"
          width={1920}
          height={1080}
          className='doubleImage caseStudyImage'
        />
      </div>

      <Carousel 
        folder='wireframes' 
        header_copy='Wireframes' 
        carousel_number={10} 
        flow_reverse={true}
        header_color={'DD6162'}
        background_color={'FFF'}
        imageHeight={695}
        imageWidth={321}
        arrowColor={'#DD6162'}
        boxShadow={true}
      />
      <Carousel 
        folder='onboarding' 
        header_copy='Onboarding Flow' 
        carousel_number={7} 
        flow_reverse={false}
        background_color={'DD6162'}
        header_color={'FFF'}
        imageHeight={826}
        imageWidth={446}
        arrowColor={'#FFF'}
        boxShadow={false}
      />
      <GifFiddy
        background_color='white'
        gif_file='firstGif'
        text='No lengthy articles, straight to the recipes'
      />
      <GifFiddy
        background_color={'#EFEBEB'}
        gif_file='secondGif'
        text='All your favorite recipes, All in one place'
        flex_direction='row-reverse'
      />
      <GifFiddy
        background_color='white'
        gif_file='thirdGif'
        text='Allergies? No problem Search by dietary restrictions'
      />
      <Image
        src="/recipeace/slide10.png"
        width={1920}
        height={1080}
        className='caseStudyImage'
      />
      <Image
        src="/recipeace/slide11.png"
        width={1920}
        height={745}
        className='caseStudyImage'
      />
      <Image
        src="/recipeace/slide12.png"
        width={1920}
        height={1080}
        className='doubleImage caseStudyImage'
      />
      <Image
        src="/recipeace/slide13.png"
        width={1920}
        height={1080}
        className='caseStudyImage'
      />
      <Image
        src="/recipeace/slide9.png"
        width={1920}
        height={1080}
        className='doubleImage caseStudyImage'
      />
      <Image
        src="/recipeace/slide14.png"
        width={1920}
        height={1080}
        className='doubleImage caseStudyImage'
      />
    </div>
  );
};

export default CaseStudy;