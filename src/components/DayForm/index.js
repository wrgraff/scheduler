import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from '../FormInput';

const DayForm = ({onSubmit, renderButtons}) => {
    const { handleSubmit, register } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form__body">
                <FormInput
                    name="date"
                    label="Число"
                    type="date"
                    register={register}
                    required={true}
                    errors={'Это поле обязательно для заполнения'}
                />
            </div>

            <div className="form__actions">
                { renderButtons() }
            </div>
        </form>
    );
};

export default DayForm;
