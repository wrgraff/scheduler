import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../history';
import Modal from '../Modal';
import SessionForm from '../SessionForm';
import { editSession } from '../../actions';

const SessionEdit = ({match}) => {
    const session = useSelector(state => state.sessions[match.params.id]);
    const onSubmit = data => {
        editSession(dispatch, match.params.id, data);
    };
    const dispatch = useDispatch();

    return (
        <Modal
            heading="Редактировать занятие"
            onDismiss={ () => history.push(`/`) }
        >
            <SessionForm initialValues={session} onSubmit={onSubmit} />
        </Modal>
    );
};

export default SessionEdit;
