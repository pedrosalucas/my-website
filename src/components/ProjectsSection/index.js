import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import ProjectItem from './ProjectItem';

function ProjectsSection(props) {
  const { messages } = React.useContext(LangContext);
  

  return (
      <section {...props}>
        <h1>{ messages.projects.title }</h1>

        <ProjectItem textcontent={messages.projects.list[0]} />

        <ProjectItem textcontent={messages.projects.list[1]} />
        
      </section>
  );
}

export default ProjectsSection;
