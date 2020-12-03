import './index.scss'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionTypes, fetchTrainers, fetchHalls, addSession } from '../../actions';
import { useForm, Controller } from 'react-hook-form';
import Button from '../Button';
import FormSelect from '../FormSelect';
import FormInput from '../FormInput';
import FormCheckbox from '../FormCheckbox';

const SessionForm = () => {
    const sessionTypes = useSelector(state => Object.values(state.sessionTypes));
    const trainers = useSelector(state => Object.values(state.trainers));
    const halls = useSelector(state => Object.values(state.halls));
    const activeDate = useSelector(state => state.activeDate);
    const dispatch = useDispatch();
    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = data => {
        addSession(dispatch, data);
    };

    console.log( activeDate)

    useEffect(() => {
        fetchSessionTypes(dispatch);
        fetchTrainers(dispatch);
        fetchHalls(dispatch);
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1>{}</h1>
            <fieldset className="form__fieldset">
                <legend className="visually-hidden">Параметры занятия</legend>

                <ul className="form__parameters">
                    <li className="form__item">
                        <FormSelect
                            name="sessionType"
                            label="Тип занятия"
                            options={sessionTypes}
                            register={register}
                            required={true}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />
                    </li>

                    <li className="form__item">
                        <FormSelect
                            name="trainer"
                            label="Тренер"
                            options={trainers}
                            register={register}
                            required={true}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />
                    </li>

                    <li className="form__item">
                        <FormSelect
                            name="hall"
                            label="Зал"
                            options={halls}
                            register={register}
                            required={true}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />
                    </li>

                    <li className="form__item form__time">
                        <FormInput
                            name="timeStart"
                            label="Время начала"
                            type="time"
                            register={register}
                            required={true}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />

                        <FormInput
                            name="timeEnd"
                            label="Время окончания"
                            type="time"
                            register={register}
                            required={true}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />
                    </li>
                    <li className="form__item">
                        <FormInput
                            name="date"
                            label="Дата"
                            type="date"
                            register={register}
                            required={true}
                            value={activeDate || ''}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />
                    </li>
                </ul>
            </fieldset>

            <fieldset className="form__fieldset">
                <legend className="visually-hidden">Дополнительные данные</legend>

                <ul className="form__additional">
                    <li className="form__item">
                        <FormInput
                            name="special"
                            label="Отметки"
                            type="text"
                            register={register}
                            required={false}
                            placeholder="Введите пометки"
                        />
                    </li>

                    <li className="form__item">
                        <Controller
                            name="isPaid"
                            control={control}
                            defaultValue={false}
                            render={props =>
                                <FormCheckbox
                                    onChange={evt => props.onChange(evt.target.checked)}
                                    checked={props.value}
                                    label="Платное занятие"
                                />
                            }
                        />
                    </li>

                    <li className="form__item">
                        <Controller
                            name="isCancelled"
                            control={control}
                            defaultValue={false}
                            render={props =>
                                <FormCheckbox
                                    onChange={evt => props.onChange(evt.target.checked)}
                                    checked={props.value}
                                    label="Занятие отменено"
                                />
                            }
                        />
                    </li>
                </ul>
            </fieldset>

            <div className="form__actions">
                <Controller
                    name="isActive"
                    control={control}
                    defaultValue={true}
                    render={props =>
                        <FormCheckbox
                            onChange={evt => props.onChange(evt.target.checked)}
                            checked={props.value}
                            label="Опубликовать"
                            className="form__button"
                        />
                    }
                />

                <Button type="submit" ico="delete" className="form__button">Удалить</Button>
                <Button type="submit" modificator="primary" className="form__button">Отправить</Button>
            </div>
        </form>
    );
};

export default SessionForm;
