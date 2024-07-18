import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal, navigate }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <img className="modal-content" src={image} alt="Modal item" />
      <button className="prev" onClick={() => navigate(-1)}>&#10094;</button>
      <button className="next" onClick={() => navigate(1)}>&#10095;</button>
    </div>
  );
};

export default Modal;

