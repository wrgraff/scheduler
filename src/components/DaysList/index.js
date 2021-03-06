import _ from 'lodash';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessions, fetchDays, fetchSessionTypes, selectActiveDate } from '../../actions';
import SessionItem from '../SessionItem';
import Day from '../Day';
import Nav from '../Nav';
import ButtonLink from '../ButtonLink';

const DaysList = () => {
    const sessionsByDate = useSelector(state => _.groupBy(state.sessions, 'date'));
    const days = useSelector(state => Object.values(state.days));
    const sessionTypes = useSelector(state => _.mapKeys(state.sessionTypes, 'id'));
    const dispatch = useDispatch();

    useEffect(() => {
        fetchSessions(dispatch);
        fetchDays(dispatch);
        fetchSessionTypes(dispatch);
    }, [dispatch]);

    const sortDays = (dayA, dayB) => {
        const a = new Date(dayA.date);
        const b = new Date(dayB.date);

        return b - a;
    };

    const sortSessions = (sessionA, sessionB) => {
        const a = sessionA.time.start || '0';
        const b = sessionB.time.start || '0';

        return a.localeCompare(b);
    };

    const renderDays = () => {
        return days.sort(sortDays).map(({date, isActive}) => {
            return (
                <Day key={date} id={date} date={date} isActive={isActive}>
                    <ul className="day__session-list session-list">
                        {renderSessions(sessionsByDate[date])}
                    </ul>

                    <ButtonLink href="/sessions/add" modificator="primary" ico="add" onClick={ () => selectActiveDate(dispatch, date) }>Добавить занятие</ButtonLink>
                </Day>
            );
        })
    };

    const renderSessions = (sessions) => {
        if (!sessions) {
            return (
                <li className="session-list__item">
                    <p className="session-list__text">Пока нет ни одного занятия</p>
                </li>
            );
        };

        if (!Object.keys(sessionTypes).length) {
            return (
                <li className="session-list__item">
                    <p className="session-list__text">Загрузка...</p>
                </li>
            );
        }

        return sessions.sort(sortSessions).map(session => {
            return (
                <SessionItem
                    session={session}
                    sessionType={sessionTypes[session.sessionType].name}
                    key={session.id}
                />
            );
        })
    };

    return (
        <React.Fragment>
            <Nav items={ days.sort(sortDays).map(day => day.date) }></Nav>
            { renderDays() }
        </React.Fragment>
    );
};

export default DaysList;
