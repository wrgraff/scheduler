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
            <ul className="settings-list">
                <li className="settings-list__item">
                    <ButtonLink href="/settings/edit/trainers" className="settings-list__link">Тренеры</ButtonLink>
                </li>
                <li className="settings-list__item">
                    <ButtonLink href="/settings/edit/sessionTypes" className="settings-list__link">Типы занятий</ButtonLink>
                </li>
                <li className="settings-list__item">
                    <ButtonLink href="/settings/edit/halls" className="settings-list__link">Залы</ButtonLink>
                </li>
            </ul>
        </Modal>
    );
};

export default Settings;
