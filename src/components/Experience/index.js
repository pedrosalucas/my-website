import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import ExpCompany from './ExpCompany';
import SofteamLogo from '../../assets/images/softeam-logo.png';
import CrablyLogo from '../../assets/images/crably-logo.png';

function Experience(props) {
  const { messages } = React.useContext(LangContext);
  
  return (
      <div {...props}>
        <h2>{ messages.experiences.title }</h2>

        <ExpCompany textContent={messages.experiences.softeam} logo={SofteamLogo} />
        <ExpCompany textContent={messages.experiences.crably} logo={CrablyLogo} />
        
      </div>
  );
}

export default Experience;
