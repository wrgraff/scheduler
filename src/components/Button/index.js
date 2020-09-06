import React from 'react';
import './index.scss';

const Button = ({ type, modificator, ico, label, children }) => {
    const modificatorClass = ` button_${modificator}`;

    const renderIcon = () => {
        if (!ico) {
            return null;
        };

        const useTag = `<use xlink:href="/img/ico/sprite.svg#${ico}" />`;
        return (
            <svg width="24" height="24" className={`button__ico ${children ? '' : 'button__ico_single'}`} dangerouslySetInnerHTML={{ __html: useTag }} />
        );
    };

    return (
        <button
            type={type}
            className={`button${modificator ? modificatorClass : ''}`}
            data-label={label}
        >
            { renderIcon() }
            {children}
        </button>
    );
};

export default Button;
