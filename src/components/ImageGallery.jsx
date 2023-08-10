import React, { useEffect, useState } from 'react';
import './ImageGallery.css'; // Import your CSS file for styling

const ImageGallery = ({ images }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const galleryElement = document.getElementById('image-gallery');

      if (galleryElement) {
        const galleryPosition = galleryElement.getBoundingClientRect().top;
        setIsVisible(galleryPosition < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="image-gallery" className={`gallery-container ${isVisible ? 'visible' : ''}`}>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
