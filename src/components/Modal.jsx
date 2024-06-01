import '../assets/styles/Modal.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

function Modal({ children, isOpen, setIsOpen }) {
    const handleOutsideClick = (e) => {
        if (e.target.className !== ('modal') || e.target.className == ('city-button')) {
            return;
        }
        setIsOpen(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (isOpen && createPortal(
        <div className="modal">
            {children}
        </div>,
        document.body
    ))
};

export default Modal;