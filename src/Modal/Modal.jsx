import { Button } from '@mui/material';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import sprite from '../icons/sprite.svg';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root2');

const Modal = ({ children, openModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      openModal();
    }
  };

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <Button className={css.close_btn} onClick={() => openModal()}>
          <svg width={20} height={20} className={css.close_btn}>
            <use href={`${sprite}#icon-Rating`} />
          </svg>
        </Button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
