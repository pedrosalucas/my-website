import React from 'react';
import { LangContext } from '../../providers/LangPreference';
import styles from './index.module.scss';


function ToggleLang() {
    const { messagesLang, setMessagesLang } = React.useContext(LangContext);

    const toggleClick = () => {
        if (messagesLang === 'en-us') {
            setMessagesLang('pt-br');
        } else {
            setMessagesLang('en-us');
        }
    }

    return (
        <div>
            <h5>Language:</h5>
            <div className={styles.toggleContainer}>
                <label className={styles.switch}> 
                    <input type="checkbox" onClick={toggleClick} />

                    <div className={styles.names}>
                        <p 
                            style={ messagesLang === 'pt-br' ? {opacity: 1} : {opacity: .5}}
                        >
                            PT ⚽
                        </p>
                        <p 
                            style={ messagesLang === 'en-us' ? {opacity: 1} : {opacity: .5}}
                        >
                            EN 🏈
                        </p>
                    </div>

                    <spam id={styles.mark}
                        className={ messagesLang === 'en-us' ? styles.markRight : styles.markLeft}
                    ></spam>
                </label>
            </div>
        </div>
    );
}

export default ToggleLang;