import React from 'react';
import history from '../../history';
import Modal from '../Modal';
import Button from '../Button';
import DayForm from '../DayForm';
import { useDispatch } from 'react-redux';
import { addDay } from '../../actions';

const DayAdd = () => {
    const onSubmit = data => {
        console.log(data);
        addDay(dispatch, data);
    };
    const dispatch = useDispatch();

    const renderButtons = () => {
        return (
            <Button type="submit" modificator="primary" className="form__button">Добавить день</Button>
        );
    };

    return (
        <Modal
            heading="Добавить день"
            onDismiss={ () => history.push(`/`) }
        >
            <DayForm
                onSubmit={onSubmit} 
                renderButtons={renderButtons}
                isAdd="true"
            />
        </Modal>
    );
};

export default DayAdd;
