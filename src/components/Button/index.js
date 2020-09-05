import React from 'react';
import './index.scss';

const Button = ({ type, modificator, children }) => {
    const modificatorClass = ` button_${modificator}`;

    return (
        <button
            type={type}
            className={`button${modificator ? modificatorClass : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;
