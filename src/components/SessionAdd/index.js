import React from 'react';
import { useDispatch } from 'react-redux';
import history from '../../history';
import Modal from '../Modal';
import SessionForm from '../SessionForm';
import { addSession } from '../../actions';

const SessionAdd = () => {
    const onSubmit = data => {
        addSession(dispatch, data);
    };
    const dispatch = useDispatch();

    return (
        <Modal
            heading="Добавить занятие"
            onDismiss={ () => history.push(`/`) }
        >
            <SessionForm onSubmit={onSubmit} />
        </Modal>
    );
};

export default SessionAdd;
