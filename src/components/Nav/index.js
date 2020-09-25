import React from 'react';
import './index.scss';

const Nav = ({ items, activeItem }) => {
    const renderItems = (items) => {
        return items.map(({id, text}) => {
            return (
                <li className={`nav__item${id === activeItem ? ' nav__item_active' : ''}`} key={id}>
                    <a href={`#${id}`} className="nav__link">
                        {text}
                    </a>
                </li>
            );
        });
    };

    return (
        <nav className="nav">
            <ul className="nav__menu">
                { renderItems(items) }
            </ul>
        </nav>
    );
};

export default Nav;
