import React from 'react';
import SessionItem from '../SessionItem';
import Day from '../Day';
import { Link } from 'react-router-dom';

const DaysList = () => {
    return (
        <Day>
            <ul className="day__session-list session-list">
                <SessionItem />
                <SessionItem />
                <SessionItem />
            </ul>

            <Link to="/add" className="button">Добавить занятие</Link>
        </Day>
    );
};

export default DaysList;
