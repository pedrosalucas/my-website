import React from 'react';
import { TimeZoneContext } from '../../providers/UserTimeZone';
import styles from './index.module.scss';

function TopGradient() {
    const { userHours } = React.useContext(TimeZoneContext);
    console.log(userHours);

    let userTime;
    if (userHours >= 4 && userHours < 12) {
        userTime = 'morning';
    } else if (userHours < 18) {
        userTime = 'afternoon';
    } else {
        userTime = 'night';
    }

    return (
        <span data-time={ userTime } className={styles.containerGradient}></span>
    );
}

export default TopGradient;
