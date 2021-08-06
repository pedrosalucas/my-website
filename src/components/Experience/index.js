import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import SofteamLogo from '../../assets/images/softeam.jpg';
import { LangContext } from '../../providers/LangPreference';

function Experience(props) {
  const { messages } = React.useContext(LangContext);
  
  return (
      <div {...props}>
        <h2>{ messages.experiences.title }</h2>

        <div className="contentText">

          <div className={styles.companyItem}>
            <div className={styles.companyImg}>
              <Image src={SofteamLogo} placeholder="blur" className={styles.companyLogo} alt="SofTeam Logo" />
            </div>
            
            <div className={styles.companyTitle}>
              <h3>SofTeam</h3>
            </div>
            <div className={styles.companyDescription}>
              <ul>
                <li>
                  I worked developing websites using WordPress.
                </li>
                <li>
                  There I developed soft skills such as being proactive and knowledge trade with coworkers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Experience;
