import React from 'react';
import { LangContext } from '../../providers/LangPreference';

const Footer = (props) => {
    const { messages } = React.useContext(LangContext);

    return (
        <footer {...props}>
            <h4 style={{display: 'flex', flexFlow: 'wrap-reverse', justifyContent: 'center'}}>
                <span>
                    © 2021 Lucas Pedrosa
                </span>
                <span>
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
                <span>
                { messages.footer } ❤️
                </span>
            </h4>
        </footer>
    );
}

export default Footer;