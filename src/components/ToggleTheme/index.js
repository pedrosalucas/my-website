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

    return (
        <div className={styles.firstContainer}>
            <h4>Theme:</h4>
            <div className={styles.toggleContainer}>
                <label className={styles.switch}> 
                    <input type="checkbox" onClick={toggleClick} />

                    <div className={styles.names}>
                        <p 
                            style={ currentTheme === 'theme-light' ? {opacity: 1} : {opacity: .5}}
                        >
                            Light { currentTheme === 'theme-light' ? '☀️' : '🌤️'}
                        </p>
                        <p 
                            style={ currentTheme === 'theme-dark' ? {opacity: 1} : {opacity: .5}}
                        >
                            Dark { currentTheme === 'theme-dark' ? '🌕' : '🌑' }
                        </p>
                    </div>

                    <spam id={styles.mark}
                        className={ currentTheme === 'theme-dark' ? styles.markRight : styles.markLeft}
                    ></spam>
                </label>
            </div>
        </div>
    );
}

export default ToggleTheme;
