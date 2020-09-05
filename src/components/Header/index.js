import React from 'react';
import './index.scss';
import Button from '../Button';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading">Редактирование расписания занятий</h1>
            <div className="header__buttons">
                <Button type="button" modificator="white">Настройки</Button>
                <Button type="button" modificator="primary">Добавить день</Button>
            </div>
        </header>
    );
};

export default Header;
