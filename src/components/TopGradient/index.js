import React from 'react';
import { TimeZoneContext } from '../../providers/UserTimeZone';
import styles from './index.module.scss';

function TopGradient() {
    const { userHours } = React.useContext(TimeZoneContext);
    const [userTime, setUserTime] = React.useState(null);
 
    React.useEffect(() => {
        if (userHours >= 4 && userHours <= 12) {
            setUserTime('morning');
        } else if (userHours > 12 && userHours < 18) {
            setUserTime('afternoon');
        } else {
            setUserTime('night');
        }
    }, [userHours]);

    return (
        <span data-time={ userTime } className={`${styles.containerGradient} ${userTime}`}></span>
    );
}

export default TopGradient;
