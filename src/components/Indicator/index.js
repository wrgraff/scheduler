import React from 'react';
import './index.scss';

const Indicator = ({ isActive, ico, children }) => {
    const renderIcon = () => {
        if (!ico) {
            return null;
        };

        const useTag = `<use xlink:href="/img/ico/sprite.svg#${ico}" />`;
        return (
            <svg width="24" height="24" className="indicators__ico" dangerouslySetInnerHTML={{ __html: useTag }} />
        );
    };

    return (
        <li
            className={`indicators__item${isActive ? ' indicators__item_active' : ''}`}
        >
            { renderIcon() }
            <p className="indicators__label">
                {children}
            </p>
        </li>
    );
};

export default Indicator;
