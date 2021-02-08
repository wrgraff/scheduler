import './index.scss';
import React, { useState } from 'react';
import Button from '../Button';

const SettingsItem = ({id, initialValue, onSave, onDelete}) => {
    const [value, setValue] = useState(initialValue);

    const onInputChange = (evt) => {
        setValue(evt.target.value);
    }

    return (
        <React.Fragment>
            <label className="field settings-fields__field">
                <span className="field__text">ID {id}</span>

                <input
                    type="text"
                    className="field__input"
                    value={value}
                    onChange={onInputChange}
                />
            </label>
            <Button ico="done" onClick={() => onSave(value)} modificator="primary" className="settings-fields__button" />
            <Button ico="delete" onClick={onDelete} className="settings-fields__button" />
        </React.Fragment>
    );
};

export default SettingsItem;
