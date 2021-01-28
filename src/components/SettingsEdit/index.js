import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrainers, fetchSessionTypes, fetchHalls } from '../../actions';
import './index.scss';
import history from '../../history';
import Modal from '../Modal';
import ButtonLink from '../ButtonLink';

const SettingsEdit = ({match}) => {
    const listType = match.params.list;
    const list = useSelector(state => Object.values(state[listType]));
    const dispatch = useDispatch();

    console.log(list)

    useEffect(() => {
        if (listType === 'trainers') {
            fetchTrainers(dispatch);
        } else if (listType === 'sessionTypes') {
            fetchSessionTypes(dispatch);
        } else if (listType === 'halls') {
            fetchHalls(dispatch);
        }
    }, [dispatch, listType]);

    const renderTrainers = (list) => {
        return list.map(item => <li key={item.id}>{item.id}: {item.name}</li>)
    };

    return (
        <Modal
            heading="Настройки"
            onDismiss={ () => history.push(`/`) }
        >
            <ul>{renderTrainers(list)}</ul>

            <ButtonLink href="/settings">Вернуться</ButtonLink>
        </Modal>
    );
};

export default SettingsEdit;
