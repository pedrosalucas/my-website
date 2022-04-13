import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import ProjectItem from './ProjectItem';
import DiagramBot from '../../assets/images/diagram_bot.png';
import NodeLogo from '../../assets/images/node_logo.png';
import MongoLogo from '../../assets/images/mongoDB_logo.png';
import NextLogo from '../../assets/images/next_logo.png';
import VercelLogo from '../../assets/images/vercel_logo.png';
import SassLogo from '../../assets/images/sass_logo.png';
import ReactLogo from '../../assets/images/react_js_logo.png';
import ReduxLogo from '../../assets/images/redux_logo.png';
import MySitePhoto from '../../assets/images/my-website-screenshot.png';
import DoginPhoto from '../../assets/images/dogin_screenshots.png';

function ProjectsSection(props) {
  const { messages } = React.useContext(LangContext);
  

  return (
      <section {...props}>
        <h1>{ messages.projects.title }</h1>

        <ProjectItem
          textContent={messages.projects.list[0]}
          Img={DiagramBot}
          toolsImg={[{...NodeLogo, "alt": "Nodejs"}, {...MongoLogo, "alt": "MongoDB"}]}
          linkRepo="https://github.com/pedrosalucas/discord-telegram-bot"
          tilteRepo={ messages.projects.repositoryTitle } />

        <ProjectItem
          textContent={messages.projects.list[2]}
          Img={DoginPhoto}
          toolsImg={[{...ReactLogo, "alt": "React"}, {...ReduxLogo, "alt": "Redux"}]}
          linkRepo="https://github.com/pedrosalucas/dogin"
          linkProject="https://dogin-pedrosalucas.vercel.app/"
        />
        <ProjectItem
          textContent={messages.projects.list[1]}
          Img={MySitePhoto}
          toolsImg={[{...SassLogo, "alt": "Sass"}, {...VercelLogo, "alt": "Vercel"}, {...NextLogo, "alt": "Nextjs"}]}
          linkRepo="https://github.com/pedrosalucas/my-website"
        />
        
      </section>
  );
}

export default ProjectsSection;
