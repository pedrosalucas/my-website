import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import ProjectItem from './ProjectItem';
import DiagramBot from '../../assets/images/diagram_bot.png';
import NodeLogo from '../../assets/images/node_logo.png';
import MongoLogo from '../../assets/images/mongoDB_logo.png';

function ProjectsSection(props) {
  const { messages } = React.useContext(LangContext);
  

  return (
      <section {...props}>
        <h1>{ messages.projects.title }</h1>

        <ProjectItem textContent={messages.projects.list[0]}
          Img={DiagramBot} toolsImg={[NodeLogo, MongoLogo]} />

        <ProjectItem textContent={messages.projects.list[1]} Img={DiagramBot} />
        
      </section>
  );
}

export default ProjectsSection;
