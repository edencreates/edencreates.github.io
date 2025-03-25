"use client"
import Image from 'next/image';
import './research.scss';

const Research = () => {

  return (
    <div className="Research">
      <div style={{maxWidth: '1980px', margin: 'auto'}}>
        <Image
          src="/behrend/slide1.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide2.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide3.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide4.png"
          width={1920}
          height={1080}
          className='doubleImage researchImage'
        />
        <Image
          src="/behrend/slide5.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide6.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide7.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide8.png"
          width={1920}
          height={1080}
          className='doubleImage researchImage'
        />
        <Image
          src="/behrend/slide9.png"
          width={1920}
          height={1080}
          className='researchImage'
        />
        <Image
          src="/behrend/slide10.png"
          width={1920}
          height={1080}
          className='doubleImage researchImage'
        />
        <Image
          src="/behrend/slide11.png"
          width={1920}
          height={1080}
          className='doubleImage researchImage'
        />
        <Image
          src="/behrend/slide12.png"
          width={1920}
          height={1080}
          className='doubleImage researchImage moveUp'
          style={{bottom: '3px'}}
        />
        <Image
          src="/behrend/slide13.png"
          width={1920}
          height={1080}
          className='doubleImage researchImage moveUp'
          style={{bottom: '7px'}}
        />
      </div>
    </div>
  );
};

export default Research;