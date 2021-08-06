import React from 'react';
import { LangContext } from '../../providers/LangPreference';

function Knowledge(props) {
  const { messages } = React.useContext(LangContext);

  return (
      <div {...props}>
        <h1>{ messages.knowledge }</h1>
      </div>
  );
}

export default Knowledge;
