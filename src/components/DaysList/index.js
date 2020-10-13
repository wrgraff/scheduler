import _ from 'lodash';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessions } from '../../actions';
import SessionItem from '../SessionItem';
import Day from '../Day';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

const DaysList = () => {
    const sessionsByDate = useSelector(state => _.groupBy(state.sessions, 'date'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSessions());
    }, [dispatch]);

    const renderDays = () => {
        const days = Object.keys(sessionsByDate);

        return days.map(day => {
            return (
                <Day key={day} date={day} id={day}>
                    <ul className="day__session-list session-list">
                        {renderSessions(sessionsByDate[day])}
                    </ul>

                    <Link to="/add" className="button button_primary">Добавить занятие</Link>
                </Day>
            );
        })
    };

    const renderSessions = (sessions) => {
        return sessions.map(session => {
            return <SessionItem session={session} key={session.id} />
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
