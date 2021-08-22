import React from 'react';
import { TimeZoneContext } from '../../providers/UserTimeZone';
import styles from './index.module.scss';

function TopGradient() {
    const { userHours } = React.useContext(TimeZoneContext);

    let userTime;
    console.log('User Hours: ' + userHours);
    if (userHours >= 4 && userHours < 12) {
        userTime = 'morning';
        console.log('morning');
    } else if (userHours >= 12 && userHours < 18) {
        userTime = 'afternoon';
        console.log('afternoon');
    } else {
        userTime = 'night';
        console.log('night');
    }
    console.log('User Time: ' + userTime);

    return (
        <span data-time={ userTime } className={`${styles.containerGradient} ${userTime}`}></span>
    );
}

export default TopGradient;
