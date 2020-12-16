import './index.scss';
import React from 'react';

const FormInput = ({name, type, defaultValue, label, placeholder, register, required}) => {
    return (
        <label className="field">
            <span className="field__text">{label}</span>

            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                ref={ register({ required }) }
                className="field__input"
                placeholder={placeholder}
            />
        </label>
    );
};

export default FormInput;
