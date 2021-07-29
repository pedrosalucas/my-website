import React from 'react';
import styles from './index.module.scss';

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.getElementsByTagName("BODY")[0].className = themeName;
}

function ToogleTheme() {
    React.useEffect(() => {
        const storageTheme = localStorage.getItem('theme');
        console.log(storageTheme);
        if (!storageTheme || storageTheme === 'theme-dark') {
            setTheme('theme-dark');
        } else if (storageTheme === 'theme-light') {
            setTheme('theme-light');
        }
    });

    const toggleClick = () => {
        const storageTheme = localStorage.getItem('theme');
        if (storageTheme === 'theme-dark') {
            setTheme('theme-light');
        } else if (storageTheme === 'theme-light') {
            setTheme('theme-dark');
        }
    }

    return (
        <label className={styles.switch}>
            <input type="checkbox" onClick={toggleClick} defaultChecked />
            <span className={styles.slider}></span>
        </label>
    );
}

export default ToogleTheme;
