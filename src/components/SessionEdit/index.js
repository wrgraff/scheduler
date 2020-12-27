import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editSession } from '../../actions';
import history from '../../history';

import Modal from '../Modal';
import SessionForm from '../SessionForm';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

const SessionEdit = ({match}) => {
    const session = useSelector(state => state.sessions[match.params.id]);
    const onSubmit = data => {
        editSession(dispatch, match.params.id, data);
    };
    const dispatch = useDispatch();

    const renderButtons = () => {
        return (
            <React.Fragment>
                <ButtonLink href={`/sessions/delete/${match.params.id}`} ico="delete" className="form__button">Удалить</ButtonLink>
                <Button type="submit" modificator="primary" className="form__button">Отправить</Button>
            </React.Fragment>
        );
    };

    return (
        <Modal
            heading="Редактировать занятие"
            onDismiss={ () => history.push(`/`) }
        >
            <SessionForm
                initialValues={session}
                onSubmit={onSubmit}
                renderButtons={renderButtons}
            />
        </Modal>
    );
};

export default SessionEdit;
