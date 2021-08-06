import React from "react";
import messages_en from "../translations/en-us.json";
import messages_pt from "../translations/pt-br.json";

export const LangContext = React.createContext();


export const LangPreference = (props) => {
    const [messagesLang, setMessagesLang] = React.useState('en-us');
    const messagesData = {
        'en-us' : messages_en,
        'pt-br' : messages_pt
    }
    
    React.useEffect(() => {
        const storageLang = localStorage.getItem('language');
        if (!storageLang) {
            localStorage.setItem('language', 'en-us');
        } else {
            setMessagesLang(storageLang);
        }
    }, []);

    React.useEffect(() => {
        if (messagesLang === 'pt-br') {
            localStorage.setItem('language', 'pt-br');
        } else {
            localStorage.setItem('language', 'en-us');
        }
    }, [messagesLang]);
    
    return (
        <LangContext.Provider value={{ messages: messagesData[messagesLang], messagesLang, setMessagesLang }}>
            {props.children}
        </LangContext.Provider>
    );
};
