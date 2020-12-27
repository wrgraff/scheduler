import './index.scss'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionTypes, fetchTrainers, fetchHalls } from '../../actions';
import { useForm, Controller } from 'react-hook-form';
import Button from '../Button';
import FormSelect from '../FormSelect';
import FormInput from '../FormInput';
import FormCheckbox from '../FormCheckbox';

const SessionForm = ({initialValues, onSubmit}) => {
    const sessionTypes = useSelector(state => Object.values(state.sessionTypes));
    const trainers = useSelector(state => Object.values(state.trainers));
    const halls = useSelector(state => Object.values(state.halls));
    const activeDate = useSelector(state => state.activeDate);
    const values = {
        date: initialValues ? initialValues.date : activeDate,
        isActive: initialValues ? initialValues.isActive : true,
        sessionType: initialValues ? parseInt(initialValues.sessionType) : null,
        trainer: initialValues ? parseInt(initialValues.trainer) : null,
        hall: initialValues ? parseInt(initialValues.hall) : null,
        timeStart: initialValues ? initialValues.time.start : '',
        timeEnd: initialValues ? initialValues.time.end : '',
        special: initialValues ? initialValues.labels.special : '',
        isPaid: initialValues ? initialValues.labels.isPaid : false,
        isCancelled: initialValues ? initialValues.labels.isCancelled : false
    };
    const dispatch = useDispatch();
    const { register, handleSubmit, control, errors } = useForm();

    useEffect(() => {
        fetchSessionTypes(dispatch);
        fetchTrainers(dispatch);
        fetchHalls(dispatch);
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <fieldset className="form__fieldset">
                <legend className="visually-hidden">Параметры занятия</legend>

                <ul className="form__parameters">
                    <li className="form__item">
                        <FormSelect
                            name="sessionType"
                            label="Тип занятия"
                            options={sessionTypes}
                            defaultValue={values.sessionType}
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
                            defaultValue={values.trainer}
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
                            defaultValue={values.hall}
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
                            defaultValue={values.timeStart}
                            register={register}
                            required={true}
                            errors={errors.sessionType && 'Это поле обязательно для заполнения'}
                        />

                        <FormInput
                            name="timeEnd"
                            label="Время окончания"
                            type="time"
                            defaultValue={values.timeEnd}
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
                            defaultValue={values.date}
                            register={register}
                            required={true}
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
                            defaultValue={values.special}
                            register={register}
                            required={false}
                            placeholder="Введите отметки"
                        />
                    </li>

                    <li className="form__item">
                        <Controller
                            name="isPaid"
                            control={control}
                            defaultValue={values.isPaid}
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
                            defaultValue={values.isCancelled}
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
                    defaultValue={values.isActive}
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
