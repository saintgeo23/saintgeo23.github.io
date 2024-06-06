import React, { useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
import './modal.less';

interface ModalProps {
  /**
   * Defines if the modal is visible
   */
  visible?: boolean;
  /**
   * Function for parent component to see if the modal closes
   */
  onClose?: Function;
  /**
   * Modal content
   */
  children?: string;
}

/**
 * Modal window for some text notification
 */
export default function Modal({ visible, onClose, children }: ModalProps) {
  const modal = useRef(null);

  function showModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();

    if (onClose) onClose();
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
