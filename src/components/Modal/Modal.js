import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onCloseModal, children }) {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return function remove() {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            // console.log('Нажали ESC, нужно закрыть модалку');

            onCloseModal();
        }
    };

    const handleBackdropClick = event => {
        // console.log('Кликнули в бекдроп');

        // console.log('currentTarget: ', event.currentTarget);
        // console.log('target: ', event.target);

        if (event.currentTarget === event.target) {
            onCloseModal();
        }
    };

    return createPortal(
        <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">{children}</div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    onCloseModal: PropTypes.func,
    children: PropTypes.node,
};
