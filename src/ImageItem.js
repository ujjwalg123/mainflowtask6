import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(image)}>
      <img src={image} alt="Gallery item" />
    </div>
  );
};

export default ImageItem;

