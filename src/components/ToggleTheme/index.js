import React from 'react';
import { ThemeContext } from '../../providers/ThemePreference';
import styles from './index.module.scss';


function ToggleTheme() {
    const { currentTheme, setCurrentTheme } = React.useContext(ThemeContext);

    const toggleClick = () => {
        if (currentTheme === 'theme-dark') {
            setCurrentTheme('theme-light');
        } else if (currentTheme === 'theme-light') {
            setCurrentTheme('theme-dark');
        }
    }

    const toggle = React.useRef();
    React.useEffect(() => {
        if (currentTheme === 'theme-dark') {
            toggle.current.checked = true;
        }
        else if (currentTheme === 'theme-light') {
            toggle.current.checked = false;
        }
    }, [currentTheme]);

    return (
        <label className={styles.switch}>
            <input ref={toggle} type="checkbox" onClick={toggleClick} />
            <span className={styles.slider}></span>
        </label>
    );
}

export default ToggleTheme;
