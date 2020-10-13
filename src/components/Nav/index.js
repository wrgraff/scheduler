import React from 'react';
import './index.scss';
import { getReadableDateRu } from  '../../utils';

const Nav = ({ items, activeItem }) => {
    const renderItems = (items) => {
        return items.map(item => {
            return (
                <li className={`nav__item${item === activeItem ? ' nav__item_active' : ''}`} key={item}>
                    <a href={`#${item}`} className="nav__link">
                        { getReadableDateRu(item) }
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
