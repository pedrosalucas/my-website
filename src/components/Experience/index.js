import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import ExpCompany from './ExpCompany';
import SofteamLogo from '../../assets/images/softeam-logo.png';
import CrablyLogo from '../../assets/images/crably-logo.png';
import BluLogo from '../../assets/images/blu_logo.jpg';

function Experience(props) {
  const { messages } = React.useContext(LangContext);
  
  return (
      <div {...props}>
        <h2>{ messages.experiences.title }</h2>

        <ExpCompany textContent={messages.experiences.blu} logo={BluLogo} />
        <ExpCompany textContent={messages.experiences.crably} logo={CrablyLogo} />
        <ExpCompany textContent={messages.experiences.softeam} logo={SofteamLogo} />
        
      </div>
  );
}

export default Experience;
