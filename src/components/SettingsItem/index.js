import './index.scss';
import React, { useState } from 'react';
import Button from '../Button';

const SettingsItem = ({id, initialValue, onSave, onDelete}) => {
    const [value, setValue] = useState(initialValue);

    const onInputChange = (evt) => {
        setValue(evt.target.value);
    }

    return (
        <label className="field">
            <span className="field__text">ID {id}</span>

            <input
                type="text"
                className="field__input"
                value={value}
                onChange={onInputChange}
            />
            <Button ico="done" onClick={() => onSave(value)} />
            <Button ico="delete" onClick={onDelete} />
        </label>
    );
};

export default SettingsItem;
