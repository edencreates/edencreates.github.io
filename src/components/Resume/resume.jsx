import ResumeCard from "./resumeCard";
import './resume.scss';


const splitLine = (size) => {
  return (
    <div className={`blackLine${size}`}>
    </div>
  )
}

const Resume = () => {

  return (
    <div className="Resume">
      <div className="resumeBlock">
        <h1 className="rightBlockHeader">Education</h1>
        <ResumeCard 
          paper="Bachelor of Science"
          topic="Psychology"
          place="Penn State University"
        />
        {splitLine('large')}
        <ResumeCard 
          paper="Google UX certificate"
          topic="UX Design"
          place="Coursera"
        />
        {splitLine('large')}
        <ResumeCard 
          paper="Web & Mobile Designer"
          topic="UI/UX, Figma & more"
          place="Udemy"
        />
      </div>
      <div className="resumeBlock">
        <h1 className="leftBlockHeader">Experience</h1>
        {splitLine('small')}
        <ResumeCard 
          paper="User Experience Designer"
          topic="Internship"
          place="Focumon"
          year="2024-2025"
        />
      </div>
    </div>
  );
};

export default Resume;