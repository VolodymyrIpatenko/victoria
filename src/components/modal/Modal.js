import React from 'react';
import Backdrop from './Backdrop';
import './Modal.css';

function Modal({ closeModal }) {
  return (
    <Backdrop closeModal={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <p>Дякуємо!В найближчий час ми з вами зв'яжемося.</p>
      </div>
    </Backdrop>
  );
}

export default Modal;
