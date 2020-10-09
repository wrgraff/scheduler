import './index.scss';
import React from 'react';
import Button from '../Button';
import Toggler from '../Toggler';
import DayDate from '../DayDate';

const Day = ({ children }) => {
    return (
        <section className="day">
            <div className="day__content">
                { children }
            </div>
            <div className="day__actions">
                <DayDate date="2020-10-05" />

                <div className="day__buttons">
                    <Button modificator="white" type="button" ico="delete">Удалить</Button>
                    <Button modificator="white" type="button" ico="copy">Дублировать</Button>
                    <Toggler modificator="white" pressed="true">Опубликован</Toggler>
                </div>
            </div>
        </section>
    );
};

export default Day;
