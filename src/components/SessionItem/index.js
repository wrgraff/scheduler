import React from 'react';
import './index.scss';
import Toggler from '../Toggler';
import Indicator from '../Indicator';
import Button from '../Button';

const SessionItem = ({session}) => {
    const {isActive, type, time, labels} = session;

    return (
        <li className="session-list__item">
            <Toggler modificator="white" label={ isActive ? 'Опубликовано' : 'Опубликовать' } pressed={ isActive }></Toggler>
            <div className="session-list__text">
                <h3 className="session-list__heading">{ type }</h3>
                <p className="session-list__time">{ time.start } – { time.end }</p>
            </div>

            <ul className="indicators">
                <Indicator isActive={ labels.special } ico="message">{ labels.special ? labels.special : 'Отметок нет' }</Indicator>
                <Indicator isActive={ labels.isPaid } ico="monetization">{ labels.isPaid ? 'Занятие платное' : 'Занятие бесплатное'}</Indicator>
                <Indicator isActive={ labels.isCancelled } ico="warning">{ labels.isCancelled ? 'Занятие отменено' : 'Занятие не отменено'}</Indicator>
            </ul>

            <Button type="button" ico="copy" modificator="white" label="Дублировать"></Button>
            <Button type="button" ico="edit" modificator="white">Редактировать</Button>
        </li>
    );
};

export default SessionItem;
