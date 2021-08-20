import React from 'react';

const Footer = (props) => {
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
                    Thank for your visit ❤️
                </span>
            </h4>
        </footer>
    );
}

export default Footer;