import './index.scss';
import React from 'react';

const FormSelect = ({name, label, options, defaultValue, register, required}) => {
    const renderOptions = () => {
        return options.map(option => {
            return (
                <option value={option.id} key={option.id}>{option.name}</option>
            );
        });
    };

    return (
        <label className="select">
            <span className="select__text">{label}</span>

            <select name={name} ref={ register({ required }) } defaultValue={defaultValue} className="select__input">
                { renderOptions() }
            </select>
        </label>
    );
};

export default FormSelect;
