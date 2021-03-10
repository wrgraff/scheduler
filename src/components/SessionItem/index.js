import React from 'react';
import './index.scss';
import { editSession, addSession } from '../../actions';
import { useDispatch } from 'react-redux';
import Toggler from '../Toggler';
import Indicator from '../Indicator';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const SessionItem = ({session, sessionType}) => {
    const {id, isActive, time, labels} = session;
    const dispatch = useDispatch();

    const onStatusToggle = () => {
        editSession(dispatch, id, {
            isActive: !isActive
        });
    };

    const onDuplicate = () => {
        const newSession = {
            isActive: false,
            date: session.date,
            sessionType: session.sessionType,
            trainer: session.trainer,
            hall: session.hall,
            timeStart: session.time.start,
            timeEnd: session.time.end,
            special: session.labels.special,
            isPaid: session.labels.isPaid,
            isCancelled: session.labels.isCancelled
        };

        addSession(dispatch, newSession);
    };

    return (
        <li className="session-list__item">
            <Toggler modificator="white" label={ isActive ? 'Опубликовано' : 'Опубликовать' } pressed={ isActive } onClick={ onStatusToggle }></Toggler>

            <div className="session-list__text">
                <h3 className="session-list__heading">{ sessionType }</h3>
                <p className="session-list__time">{ time.start } – { time.end }</p>
            </div>

            <ul className="indicators">
                <Indicator isActive={ labels.special } ico="message">{ labels.special ? labels.special : 'Отметок нет' }</Indicator>
                <Indicator isActive={ labels.isPaid } ico="monetization">{ labels.isPaid ? 'Занятие платное' : 'Занятие бесплатное'}</Indicator>
                <Indicator isActive={ labels.isCancelled } ico="warning">{ labels.isCancelled ? 'Занятие отменено' : 'Занятие не отменено'}</Indicator>
            </ul>

            <Button type="button" ico="copy" modificator="white" label="Дублировать" onClick={onDuplicate}></Button>
            <ButtonLink href={`/sessions/edit/${id}`} modificator="white" ico="edit">Редактировать</ButtonLink>
        </li>
    );
};

export default SessionItem;
