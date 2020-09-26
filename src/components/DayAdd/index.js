import React from 'react';
import history from '../../history';
import Modal from '../Modal';

const DayAdd = () => {
    return (
        <Modal
            heading="Delete artwork"
            content={`Hi`}
            actions={`Bye`}
            onDismiss={ () => history.push(`/`) }
        />
    );
};

export default DayAdd;
