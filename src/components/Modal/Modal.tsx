import React, { useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import './modal.sass';

interface ModalProps {
  /**
   * Defines if the modal is visible
   */
  visible?: boolean;
  /**
   * Modal content
   */
  children?: string;
}

/**
 * Modal window for some text notification
 */
export function Modal({ visible, children }: ModalProps) {
  const modal = useRef(null);

  function showModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();
  }

  useEffect(() => {
    if (visible) showModal();
  }, [visible]);

  return ReactDom.createPortal(
    <dialog ref={modal} className="modal">
      <div className="modal__container">
        <div className="modal__box">
          <a className="modal__close" onClick={closeModal}>
            &#128473;
          </a>
          <div className="modal__content">{children || 'Модальное окно не мое, я просто код написал'}</div>
        </div>
      </div>
    </dialog>,

    document.body
  );
}
