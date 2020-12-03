import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ href, modificator, ico, label, children, className, onClick }) => {
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

    const renderLabel = () => {
        if (!label) {
            return null;
        };

        return (
            <span className="button__label">{label}</span>
        );
    };

    return (
        <Link
            to={href}
            className={`button${modificator ? modificatorClass : ''} ${className}`}
            onClick={onClick}
        >
            { renderIcon() }
            {children}
            { renderLabel() }
        </Link>
    );
};

export default Button;
