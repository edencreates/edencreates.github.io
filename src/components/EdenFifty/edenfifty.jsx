import Image from "next/image";
import './edenfifty.scss';

const EdenFifty = () => {

    return (
      <div className="EdenFifty">
        <div className="text-half">
          <h1>About</h1>
          <p>
            Hi, I’m Eden, a UX designer with a background in Applied Psychology from Penn State. My research expertise helps me create user-centered, data-driven designs that balance usability and business goals.
          </p>
          <p>
            I specialize in crafting intuitive, responsive websites and applications using Figma, turning complex challenges into seamless digital experiences.
          </p>
        </div>
        <div className="image-half">
          <Image
            src="/eden.png"
            width={565}
            height={755}
          />
        </div>
        <h2>Let's create intuitive and user-friendly designs toge<span>ther!</span></h2>
      </div>
    );
  };
  
  export default EdenFifty;