import React from 'react';
import history from '../../history';
import Modal from '../Modal';
import SessionForm from '../SessionForm';

const SessionAdd = () => {
    return (
        <Modal
            heading="Добавить занятие"
            onDismiss={ () => history.push(`/`) }
        >
            <SessionForm />
        </Modal>
    );
};

export default SessionAdd;
