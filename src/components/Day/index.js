import './index.scss';
import React from 'react';
import { editDay } from '../../actions';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Toggler from '../Toggler';
import DayDate from '../DayDate';

const Day = ({ id, date, isActive, children }) => {
    const dispatch = useDispatch();

    const onStatusToggle = () => {
        editDay(dispatch, id, {
            isActive: !isActive
        });
    };


    return (
        <section className="day" id={date}>
            <div className="day__content">
                { children }
            </div>
            <div className="day__actions">
                <DayDate date={date} />

                <div className="day__buttons">
                    <Button modificator="white" type="button" ico="delete">Удалить</Button>
                    {/* <Button modificator="white" type="button" ico="copy">Дублировать</Button> */}
                    <Toggler modificator="white" pressed={ isActive } onClick={ onStatusToggle }>
                        {isActive ? 'Опубликован' : 'Опубликовать'}
                    </Toggler>
                </div>
            </div>
        </section>
    );
};

export default Day;
