import React from 'react';
import './index.scss';
import Toggler from '../Toggler';
import Indicator from '../Indicator';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const SessionItem = ({session, sessionType}) => {
    const {id, isActive, time, labels} = session;

    return (
        <li className="session-list__item">
            <Toggler modificator="white" label={ isActive ? 'Опубликовано' : 'Опубликовать' } pressed={ isActive }></Toggler>
            <div className="session-list__text">
                <h3 className="session-list__heading">{ sessionType }</h3>
                <p className="session-list__time">{ time.start } – { time.end }</p>
            </div>

            <ul className="indicators">
                <Indicator isActive={ labels.special } ico="message">{ labels.special ? labels.special : 'Отметок нет' }</Indicator>
                <Indicator isActive={ labels.isPaid } ico="monetization">{ labels.isPaid ? 'Занятие платное' : 'Занятие бесплатное'}</Indicator>
                <Indicator isActive={ labels.isCancelled } ico="warning">{ labels.isCancelled ? 'Занятие отменено' : 'Занятие не отменено'}</Indicator>
            </ul>

            <Button type="button" ico="copy" modificator="white" label="Дублировать"></Button>
            <ButtonLink href={`/sessions/edit/${id}`} modificator="white" ico="edit">Редактировать</ButtonLink>
        </li>
    );
};

export default SessionItem;
