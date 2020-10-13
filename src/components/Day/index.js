import './index.scss';
import React from 'react';
import Button from '../Button';
import Toggler from '../Toggler';
import DayDate from '../DayDate';

const Day = ({ id, date, isActive, children }) => {
    return (
        <section className="day" id={id}>
            <div className="day__content">
                { children }
            </div>
            <div className="day__actions">
                <DayDate date={date} />

                <div className="day__buttons">
                    <Button modificator="white" type="button" ico="delete">Удалить</Button>
                    <Button modificator="white" type="button" ico="copy">Дублировать</Button>
                    <Toggler modificator="white" pressed={isActive}>{isActive ? 'Опубликован' : 'Опубликовать'}</Toggler>
                </div>
            </div>
        </section>
    );
};

export default Day;
