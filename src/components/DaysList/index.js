import _ from 'lodash';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessions, fetchDays, fetchSessionTypes, fetchTrainers, fetchHalls } from '../../actions';
import SessionItem from '../SessionItem';
import Day from '../Day';
import Nav from '../Nav';
import ButtonLink from '../ButtonLink';

const DaysList = () => {
    const sessionsByDate = useSelector(state => _.groupBy(state.sessions, 'date'));
    const days = useSelector(state => Object.values(state.days));
    const sessionTypes = useSelector(state => Object.values(state.sessionTypes));
    // const trainers = useSelector(state => Object.values(state.trainers));
    // const halls = useSelector(state => Object.values(state.halls));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSessions());
        dispatch(fetchDays());
        dispatch(fetchSessionTypes());
        dispatch(fetchTrainers());
        dispatch(fetchHalls());
    }, [dispatch]);

    const renderDays = () => {
        return days.map(({date, isActive}) => {
            return (
                <Day key={date} id={date} date={date} isActive={isActive}>
                    <ul className="day__session-list session-list">
                        {renderSessions(sessionsByDate[date])}
                    </ul>

                    <ButtonLink href="/add" modificator="primary" ico="add">Добавить занятие</ButtonLink>
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

        return sessions.map(session => {
            return (
                <SessionItem
                    session={session}
                    sessionType={sessionTypes[session.type].name}
                    key={session.id}
                />
            );
        })
    };

    return (
        <React.Fragment>
            <Nav items={ Object.keys(sessionsByDate) } activeItem=""></Nav>
            { renderDays() }
        </React.Fragment>
    );
};

export default DaysList;
