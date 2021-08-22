import React from 'react';
import styles from './index.module.scss';
import { LangContext } from '../../providers/LangPreference';
import { TimeZoneContext } from '../../providers/UserTimeZone';

function Hello(props) {
  const { messages } = React.useContext(LangContext);
  const { userHours } = React.useContext(TimeZoneContext);
  const [openMenu, setOpenMenu] = React.useState(false);

  let helloMessage;
  if (userHours >= 4 && userHours <= 12) {
    helloMessage = messages.hello.morning;
  } else if (userHours > 12 && userHours < 18) {
    helloMessage = messages.hello.afternoon;
  } else {
    helloMessage = messages.hello.evening;
  }

  React.useEffect(() => {
    if (openMenu === true) {
      document.getElementById('buttonMenu').classList.add('open');
      document.getElementById('sidebar').classList.add('open');
      document.getElementById('overlay-menu').classList.add('open');
    } else {
      document.getElementById('buttonMenu').classList.remove('open');
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('overlay-menu').classList.remove('open');
    }
  }, [openMenu]);


  return (
      <div {...props}>
        <div className={styles.contentContainer}>
          <h2>
            { helloMessage } 👋<span>,</span>
          </h2>

          <button id="buttonMenu" onClick={() => {setOpenMenu(!openMenu)}} className={styles.wrapperMenu} style={{ display: 'none' }}>
            <span id={styles.dash1}></span>
            <span id={styles.dash2}></span>
            <span id={styles.dash3}></span>
          </button>
        </div>
      </div>
  )
}

export default Hello;
