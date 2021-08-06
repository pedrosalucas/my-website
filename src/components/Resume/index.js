import React from 'react';
import { LangContext } from '../../providers/LangPreference';


function Resume(props) {
    const { messages } = React.useContext(LangContext);

    return (
        <div {...props}>
            <h4 className="contentText">
                { messages.resume }
            </h4>
        </div>
    );
}

export default Resume;
