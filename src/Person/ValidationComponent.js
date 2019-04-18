import React from 'react';

const validation = (props) => {
    let text;
    let textLength = props.textLength;

    if (textLength <= 5) {
        text = 'Text too short';
    } else if (textLength > 5) {
        text = 'Text too long'
    }

    return (
        <div className="Validation">
            <p>{text}</p>
        </div>
    )
};

export default validation;
