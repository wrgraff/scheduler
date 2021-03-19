import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionTypes, deleteSession } from '../../actions';
import history from '../../history';

import Modal from '../Modal';
import Button from '../Button';

const SessionEdit = ({match}) => {
    const session = useSelector(state => state.sessions[match.params.id]);
    const sessionTypes = useSelector(state => state.sessionTypes);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchSessionTypes(dispatch);
    }, [dispatch]);

    const renderText = () => {
        if (session && sessionTypes) {
            return (
                <p>Вы уверены, что хотите удалить занятие { sessionTypes[session.sessionType].name } в период { session.time.start }–{ session.time.end }?</p>
            );
        } else {
            return (
                <p>Loading...</p>
            );
        }
    };

    return (
        <Modal
            heading="Удалить занятие"
            onDismiss={ () => history.push(`/`) }
        >
            { renderText() }

            <div className="form__actions">
                <Button type="button" onClick={ () => history.push(`/`) } className="form__button">Отменить</Button>
                <Button type="button" onClick={ () => deleteSession(dispatch, match.params.id) } ico="delete" modificator="primary" className="form__button">Удалить</Button>
            </div>
        </Modal>
    );
};

export default SessionEdit;
