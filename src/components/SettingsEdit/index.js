import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchTrainers,
    addTrainer,
    deleteTrainer,
    editTrainer,
    fetchSessionTypes,
    addSessionType,
    deleteSessionType,
    editSessionType,
    fetchHalls,
    addHall,
    deleteHall,
    editHall
} from '../../actions';
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
            <li key={item.id} className="settings-fields__item">
                <SettingsItem
                    id={item.id}
                    initialValue={item.name}
                    onSave={(name) => {
                        if (listType === 'trainers') {
                            editTrainer(dispatch, item.id, name)
                        } else if (listType === 'sessionTypes') {
                            editSessionType(dispatch, item.id, name)
                        } else if (listType === 'halls') {
                            editHall(dispatch, item.id, name)
                        }
                    }}
                    onDelete={() => {
                        if (listType === 'trainers') {
                            deleteTrainer(dispatch, item.id);
                        } else if (listType === 'sessionTypes') {
                            deleteSessionType(dispatch, item.id);
                        } else if (listType === 'halls') {
                            deleteHall(dispatch, item.id);
                        }
                    }}
                />
            </li>
        ));
    };

    const onSubmit = (evt) => {
        evt.preventDefault();

        if (listType === 'trainers') {
            addTrainer(dispatch, newItem);
        } else if (listType === 'sessionTypes') {
            addSessionType(dispatch, newItem);
        } else if (listType === 'halls') {
            addHall(dispatch, newItem);
        }
    };

    return (
        <Modal
            heading="Настройки"
            onDismiss={ () => history.push(`/`) }
        >
            <ul className="settings-fields">{renderList(list)}</ul>

            <form onSubmit={onSubmit} className="add-form">
                <label className="field add-form__field">
                    <span className="field__text">Новый элемент</span>

                    <input
                        type="text"
                        className="field__input"
                        value={newItem}
                        placeholder="Значение"
                        onChange={evt => setNewItem(evt.target.value)}
                    />
                </label>
                <Button type="submit" modificator="primary" className="add-form__button">Добавить</Button>
            </form>

            <ButtonLink href="/settings">Вернуться</ButtonLink>
        </Modal>
    );
};

export default SettingsEdit;
