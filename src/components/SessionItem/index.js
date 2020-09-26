import React from 'react';
import './index.scss';
import Toggler from '../Toggler';
import Indicator from '../Indicator';
import Button from '../Button';

const SessionItem = () => {
    return (
        <li className="session-list__item">
            <Toggler modificator="white" label="Не опубликовано"></Toggler>
            <div className="session-list__text">
                <h3 className="session-list__heading">Super Sculpt</h3>
                <p className="session-list__time">11:30 – 12:30</p>
            </div>

            <ul className="indicators">
                <Indicator isActive="true" ico="message">Имеется отметка</Indicator>
                <Indicator isActive="true" ico="monetization">Занятие платное</Indicator>
                <Indicator ico="warning">Занятие не отменено</Indicator>
            </ul>

            <Button type="button" ico="copy" modificator="white" label="Дублировать"></Button>
            <Button type="button" ico="edit" modificator="white">Редактировать</Button>
        </li>
    );
};

export default SessionItem;
