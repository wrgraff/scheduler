import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSession, editSession } from '../../actions';
import history from '../../history';
import Modal from '../Modal';
import SessionForm from '../SessionForm';

const SessionEdit = (props) => {
    const session = useSelector(state => state.sessions[props.match.params.id]);

    return (
        <Modal
            heading="Редактировать занятие"
            onDismiss={ () => history.push(`/`) }
        >
            <SessionForm initialValues={session} />
        </Modal>
    );
};

export default SessionEdit;
