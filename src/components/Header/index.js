import React from 'react';
import './index.scss';
import ButtonLink from '../ButtonLink';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading">Редактирование расписания занятий</h1>
            <div className="header__buttons">
                <ButtonLink href="/settings" modificator="white" ico="settings">Настройки</ButtonLink>
                <ButtonLink href="/days/add" modificator="primary">Добавить день</ButtonLink>
            </div>
        </header>
    );
};

export default Header;
