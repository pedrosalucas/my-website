import Image from 'next/image';
import styles from './index.module.scss';
import SofteamLogo from '../../assets/images/softeam.jpg';

function Experience(props) {
    return (
        <div {...props}>
          <h2>Experience</h2>
          <div className={styles.companyItem}>
            <div className={styles.companyImg}>
              <Image src={SofteamLogo} placeholder="blur" className={styles.companyLogo} alt="SofTeam Logo" />
            </div>
            
            <div className={styles.companyDescription}>
              <h3>SofTeam</h3>
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
    );
}

export default Experience;
