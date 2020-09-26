import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

const Modal = props => {
    return ReactDOM.createPortal(
        <section className="modal" onClick={ props.onDismiss }>
            <div className="modal__container" onClick={ evt => evt.stopPropagation() }>
                <header className="modal__header">
                    <h2>
                        { props.heading }
                    </h2>
                </header>

                <div className="modal__body">
                    { props.content }
                </div>

                <footer className="modal__footer">
                    { props.actions }
                </footer>

                <Button
                    type="button"
                    ico="close"
                    modificator="white"
                    label="Закрыть окно"
                    className="modal__close"
                    onClick={ props.onDismiss }
                >
                </Button>
            </div>
        </section>,
        document.querySelector('#modal')
    );
};

export default Modal;
