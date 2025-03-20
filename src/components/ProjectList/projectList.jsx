import React from 'react';
import './projectList.scss';
import Image from 'next/image';
import ProjectCard from '../ProjectCard/projectCard';

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="pl_header">
        <Image
          src="/ghosty.png"
          width={40}
          height={40}
        />
        <h4>Some of my projects:</h4>
      </div>
      <ProjectCard 
        project_name="RECIPEACE APP DESIGN"
        sub_name="Mobile/Product Design"
        year_completed="2024"
        card_image="/kitchenpad.png"
        current_status="active"
      />
      <ProjectCard 
        project_name="CYBERBULLYING RESEARCH"
        sub_name="Bachelor's Thesis"
        year_completed="2022"
        card_image="/basic.png"
        current_status="active"
      />
      <ProjectCard 
        project_name="FOCUMON APP REDESIGN"
        sub_name="Mobile/Game Design"
        year_completed="2024"
        card_image="/focumon.png"
        current_status="coming-soon"
      />
      <ProjectCard 
        project_name="PLOWFLOW APP DESIGN"
        sub_name="Mobile/Product Design"
        year_completed="2025"
        card_image="/toronto.png"
        current_status="coming-soon"
      />
    </div>
  );
};

export default ProjectList;