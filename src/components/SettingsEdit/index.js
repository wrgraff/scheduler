import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrainers, fetchSessionTypes, fetchHalls, addTrainer, deleteTrainer, editTrainer } from '../../actions';
import './index.scss';
import history from '../../history';
import Modal from '../Modal';
import ButtonLink from '../ButtonLink';
import Button from '../Button';
import SettingsItem from '../SettingsItem';

const SettingsEdit = ({match}) => {
    const listType = match.params.list;
    const list = useSelector(state => Object.values(state[listType]));

    const [newItem, setNewItem] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (listType === 'trainers') {
            fetchTrainers(dispatch);
        } else if (listType === 'sessionTypes') {
            fetchSessionTypes(dispatch);
        } else if (listType === 'halls') {
            fetchHalls(dispatch);
        }
    }, [dispatch, listType]);

    const renderList = (list) => {
        return list.map(item => (
            <li key={item.id}>
                <SettingsItem
                    id={item.id}
                    initialValue={item.name}
                    onSave={(name) => editTrainer(dispatch, item.id, name)}
                    onDelete={() => deleteTrainer(dispatch, item.id)}
                />
            </li>
        ));
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(newItem); 
        addTrainer(dispatch, newItem);
    };

    return (
        <Modal
            heading="Настройки"
            onDismiss={ () => history.push(`/`) }
        >
            <ul>{renderList(list)}</ul>

            <form onSubmit={onSubmit}>
                <label className="field">
                    <span className="field__text">Значение</span>

                    <input
                        type="text"
                        className="field__input"
                        value={newItem}
                        onChange={evt => setNewItem(evt.target.value)}
                    />
                </label>
                <Button type="submit">Добавить</Button>
            </form>

            <ButtonLink href="/settings">Вернуться</ButtonLink>
        </Modal>
    );
};

export default SettingsEdit;
