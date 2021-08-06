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

    const toggle = React.useRef();
    React.useEffect(() => {
        if (messagesLang === 'en-us') {
            toggle.current.checked = true;
        }
        else if (messagesLang === 'pt-br') {
            toggle.current.checked = false;
        }
    }, [messagesLang]);

    return (
        <label className={styles.switch}> 
            <input ref={toggle} type="checkbox" onClick={toggleClick} />
            <span className={styles.slider}></span>
        </label>
    );
}

export default ToggleLang;