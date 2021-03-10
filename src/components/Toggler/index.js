import React from 'react';
import './index.scss';

const Toggler = ({ modificator, pressed, label, children, onClick }) => {

    const modificatorClass = ` toggler_${modificator}`;

    const renderIcon = () => {
        const useTag = `<use xlink:href="/img/ico/sprite.svg#toggle-${pressed ? 'on' : 'off'}" />`;
        return (
            <svg width="24" height="24" className={`toggler__ico ${children ? '' : 'toggler__ico_single'}`} dangerouslySetInnerHTML={{ __html: useTag }} />
        );
    };

    const renderLabel = () => {
        if (!label) {
            return null;
        };

        return (
            <span className="toggler__label">{label}</span>
        );
    };

    return (
        <button
            type="button"
            aria-pressed={pressed}
            className={`toggler${modificator ? modificatorClass : ''}`}
            onClick={onClick}
        >
            { renderIcon() }
            {children}
            { renderLabel() }
        </button>
    );
};

export default Toggler;
