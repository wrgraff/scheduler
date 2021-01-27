import React from 'react';
import { useDispatch } from 'react-redux';
import history from '../../history';
import Modal from '../Modal';
import SessionForm from '../SessionForm';
import { addSession } from '../../actions';
import Button from '../Button';

const SessionAdd = () => {
    const onSubmit = data => {
        addSession(dispatch, data);
    };
    const dispatch = useDispatch();

    const renderButtons = () => {
        return (
            <React.Fragment>
                <Button type="submit" modificator="primary" className="form__button">Добавить сессию</Button>
            </React.Fragment>
        );
    };

    return (
        <Modal
            heading="Добавить занятие"
            onDismiss={ () => history.push(`/`) }
        >
            <SessionForm
                onSubmit={onSubmit} 
                renderButtons={renderButtons}
                isAdd="true"
            />
        </Modal>
    );
};

export default SessionAdd;
