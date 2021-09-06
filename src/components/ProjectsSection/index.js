import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import ProjectItem from './ProjectItem';
import DiagramBot from '../../assets/images/diagram_bot.png';
import NodeLogo from '../../assets/images/node_logo.png';
import MongoLogo from '../../assets/images/mongoDB_logo.png';
import NextLogo from '../../assets/images/next_logo.png';
import VercelLogo from '../../assets/images/vercel_logo.png';
import SassLogo from '../../assets/images/sass_logo.png';
import GALogo from '../../assets/images/googleAnalytics-logo.png';
import MySitePhoto from '../../assets/images/my-website-screenshot.png';

function ProjectsSection(props) {
  const { messages } = React.useContext(LangContext);
  

  return (
      <section {...props}>
        <h1>{ messages.projects.title }</h1>

        <ProjectItem textContent={messages.projects.list[0]}
          Img={DiagramBot} toolsImg={[NodeLogo, MongoLogo]}
          linkRepo="https://github.com/pedrosalucas/discord-telegram-bot" />

        <ProjectItem textContent={messages.projects.list[1]} Img={MySitePhoto}
          toolsImg={[SassLogo, VercelLogo, NextLogo, GALogo]}
          linkRepo="https://github.com/pedrosalucas/my-website" />
        
      </section>
  );
}

export default ProjectsSection;
