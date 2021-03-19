import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessions, fetchSessionTypes, deleteSession, deleteDay } from '../../actions';
import history from '../../history';
import { getReadableDateRu } from '../../utils';

import Modal from '../Modal';
import Button from '../Button';

const DayDelete = ({match}) => {
    const day = useSelector(state => state.days[match.params.id]);
    const sessionTypes = useSelector(state => state.sessionTypes);
    const sessions = useSelector(state => Object.values(state.sessions).filter(session => session.date === day.date || ''));
    const dispatch = useDispatch();

    useEffect(() => {
        fetchSessions(dispatch);
        fetchSessionTypes(dispatch);
    }, [dispatch]);

    const renderText = () => {
        if (day) {
            return (
                <p>Вы уверены, что хотите удалить все расписание на { getReadableDateRu(day.date) }?</p>
            );
        } else {
            return (
                <p>Loading...</p>
            );
        }
    };

    const renderSessions = () => {
        if (sessions && sessionTypes) {
            return sessions.map(session => {
                return (
                    <li>
                        <strong>{sessionTypes[session.sessionType].name}</strong> {session.time.start}—{session.time.end}
                    </li>
                );
            });
        } else {
            return (
                <li>Sessions info loading...</li>
            );
        }
    };

    const onDelete = () => {
        deleteDay(dispatch, match.params.id);
        sessions.forEach(session => deleteSession(dispatch, session.id));
    };

    return (
        <Modal
            heading="Удалить день"
            onDismiss={ () => history.push(`/`) }
        >
            { renderText() }
            <ul>
                { renderSessions() }
            </ul>

            <div className="form__actions">
                <Button type="button" onClick={ () => history.push(`/`) } className="form__button">Отменить</Button>
                <Button type="button" onClick={ onDelete } ico="delete" modificator="primary" className="form__button">Удалить</Button>
            </div>
        </Modal>
    );
};

export default DayDelete;
