import React from 'react';
import styles from './index.module.scss';
import Image from 'next/dist/client/image';

function ExpCompany({ textContent, logo }) {
    return (
        <div className="contentText">
          <div className={styles.companyItem}>
            <div className={styles.companyImg}>
              <Image src={logo} placeholder="blur" width="75px" height="75px" className={styles.companyLogo} alt="SofTeam Logo" />
            </div>
            
            <div className={styles.companyTitle}>
              <h3>{textContent.companyName}</h3>
            </div>
            <div className={styles.companyDescription}>
              <ul>
                <li>{textContent.descriptions.first}</li>
                <li>{textContent.descriptions.second}</li>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default ExpCompany;
