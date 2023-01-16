import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export default function Backdrop({ children }) {
  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    document.getElementById('portal')
  );
}
