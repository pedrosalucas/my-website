import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import { TimeZoneContext } from '../../providers/UserTimeZone';

function Hello(props) {
  const { messages } = React.useContext(LangContext);
  const { userHours } = React.useContext(TimeZoneContext);

  let helloMessage;
  if (userHours >= 4 && userHours < 12) {
    helloMessage = messages.hello.morning;
  } else if (userHours < 18) {
    helloMessage = messages.hello.afternoon;
  } else {
    helloMessage = messages.hello.evening;
  }

    return (
        <div {...props}>
          <h2>{ helloMessage } 👋,</h2>
        </div>
    )
}

export default Hello;
