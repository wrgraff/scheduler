import './index.scss';
import React, { useState } from 'react';
import { getWeekdayRu, getWeekdayEn, getReadableDateRu } from  '../../utils';

const DayDate = (props) => {
    const [date, setDate] = useState(props.date);

    const renderDate = (date) => {
        if (!date) {
            return (
                <span className="date__text">Выбрать дату</span>
            );
        };

        return (
            <React.Fragment>
                <span className="date__text">
                    { getReadableDateRu(date) }
                </span>
                <span className={`date__day date__day_${ getWeekdayEn(date).toLowerCase() }`}>
                    <span className="visually-hidden">{ getWeekdayRu(date) }</span>
                </span>
            </React.Fragment>
        );
    };

    return (
        <label className="day__date date">
            { renderDate(date) }

            <input
                type="date"
                name="date"
                min="2020-08-01"
                value={date}
                className="date__input"
                onChange={evt => setDate(evt.target.value)}
            />
        </label>
    );
};

export default DayDate;
