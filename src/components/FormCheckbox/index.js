import './index.scss';
import React from 'react';

const FormCheckbox = ({name, label, checked, className, onChange}) => {
    return (
        <label className={`checkbox ${className}`}>
            <input name={name} type="checkbox" checked={checked} className="checkbox__input" onChange={onChange} />

            <span className="checkbox__text">{label}</span>
        </label>
    );
};

export default FormCheckbox;
