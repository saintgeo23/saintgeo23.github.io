import React, { FormEvent, useState } from 'react';
import Modal from '../Modal/Modal';
import './modal-button.less';

export default function ModalButton() {
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  function closeModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <input
        placeholder="Текст модального окна"
        value={text}
        onInput={(e: FormEvent<HTMLInputElement>) => setText((e.target as HTMLInputElement).value)}
      />

      <button
        onClick={() => {
          setIsModalVisible((state) => !state);
        }}
      >Show modal</button>

      <Modal
        visible={isModalVisible}
        onClose={closeModal}
      >{text}</Modal>
    </>
  );
}
