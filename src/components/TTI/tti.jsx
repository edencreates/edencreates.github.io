import './tti.scss';
import Image from 'next/image';

const TTI = () => {

  return (
    <div className="TTI">
      <div className="tti">
        <h1>How I can help</h1>
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
  );
};
  
export default TTI;