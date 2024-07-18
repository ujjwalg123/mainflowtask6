import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          closeModal={closeModal}
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default Gallery;

