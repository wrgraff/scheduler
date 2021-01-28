import React from 'react';
import './index.scss';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading">Редактирование расписания занятий</h1>
            <div className="header__buttons">
                <ButtonLink href="/settings" modificator="white" ico="settings">Настройки</ButtonLink>

                <Button type="button" modificator="primary">Добавить день</Button>
            </div>
        </header>
    );
};

export default Header;
