import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

const Modal = ({heading, onDismiss, children}) => {
    return ReactDOM.createPortal(
        <section className="modal" onClick={ onDismiss }>
            <div className="modal__container" onClick={ evt => evt.stopPropagation() }>
                <header className="modal__header">
                    <h2>
                        { heading }
                    </h2>
                </header>

                <div className="modal__body">
                    { children }
                </div>

                <Button
                    type="button"
                    ico="close"
                    modificator="white"
                    label="Закрыть окно"
                    className="modal__close"
                    onClick={ onDismiss }
                />
            </div>
        </section>,
        document.querySelector('#modal')
    );
};

export default Modal;
