import React, { useState } from 'react';

export const SlideshowCard = ({
  animalName,
  scientificName,
  photos = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  // Prevent crashes if there are no photos
  if (photos.length === 0) {
    return null;
  }

  const currentPhoto = photos[currentIndex];

  return (
    <div className="masonry-item slideshow-card">
      <img
        src={currentPhoto.src}
        alt={currentPhoto.alt || `${animalName} slideshow`}
        loading="lazy"
      />

      {photos.length > 1 && (
        <>
          <button className="nav-btn prev" onClick={prevSlide}>
            &#10094;
          </button>

          <button className="nav-btn next" onClick={nextSlide}>
            &#10095;
          </button>
        </>
      )}

      <h4>{animalName}</h4>

      {scientificName && (
        <p className="scientific-name">
          <em>{scientificName}</em>
        </p>
      )}

      {(photos.length > 1) && (
        <p className="slide-counter">
          {currentIndex + 1} / {photos.length}
        </p>
      )}
    </div>
  );
};
