import React from 'react';
import './index.scss';
import history from '../../history';
import Modal from '../Modal';
import ButtonLink from '../ButtonLink';

const Settings = () => {
    return (
        <Modal
            heading="Настройки"
            onDismiss={ () => history.push(`/`) }
        >
            <ul>
                <li>
                    <ButtonLink href="/settings/edit/trainers">Тренеры</ButtonLink>
                </li>
                <li>
                    <ButtonLink href="/settings/edit/sessionTypes">Типы занятий</ButtonLink>
                </li>
                <li>
                    <ButtonLink href="/settings/edit/halls">Залы</ButtonLink>
                </li>
            </ul>
        </Modal>
    );
};

export default Settings;
