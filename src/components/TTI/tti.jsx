import './tti.scss';
import Image from 'next/image';

const TTI = () => {

  return (
    <div>
      <div className="TTI">
        <div className="tti">
          <h1>How I Can Help</h1>
          <Image
            width={770}
            height={770}
            src="/line-image.png"
          />
        </div>
        <div className="tti-list">
          <p>User Research</p>
          <p>Usability Testing</p>
          <p>Information</p>
          <p>Architecture</p>
          <p>Wireframing</p>
          <p>Prototyping</p>
          <p>Product Design</p>
          <p>Interaction Design</p>
        </div>
      </div>

      <div className="mobileTTI">
        <h1>How I Can Help</h1>
        <div className='mTTI_group'>
          <div className="tti">
            <Image
              width={142}
              height={142}
              src="/line-image.png"
            />
          </div>
          <div className="tti-list">
            <p>User Research</p>
            <p>Usability Testing</p>
            <p>Information Architecture</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Product Design</p>
            <p>Interaction Design</p>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};
  
export default TTI;