import React from 'react';
import Image from 'next/image';
import './projectCard.scss';

const ProjectCard = ({card_image, project_name, sub_name, year_completed, project_link, current_status}) => {
  return (
    <div className={`ProjectCard ${current_status}`}>
      <div className='card_container'>
        <Image
          src={card_image}
          width={537}
          height={358}
        />
        <div>
          {current_status == 'coming-soon' &&
            <p className='coming-soon'>Coming Soon:</p>
          }
          <h4>{project_name}</h4>
          <p className="subName">{sub_name}</p>
          <p>{year_completed}</p>
          <a href={project_link}>
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
