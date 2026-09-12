import React, { useState } from 'react';
import "./slideshow-card.css"

export const SlideshowCard = ({
  animalName,
  scientificName,
  location,
  camera,
  date,
  url,
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
      <div>
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
      </div>

      {(photos.length > 1) && (
        <p className="slide-counter">
          {currentIndex + 1} / {photos.length}
        </p>
      )}

      <div className='column'>
        <div className='row--apart'>
          <p className='animal-name'>{animalName}</p>
          {scientificName && (
            <p className="scientific-name">
              <a href={url}>{scientificName}</a>
            </p>
          )}
        </div>
        
        <div className='row--apart subtitle'>
        
          {location && (
            <p className='location'>{location}</p>
          )}
          {date && (
            <p className='date'>{date}</p>
          )}
        </div>
        
        <div className='row--apart subtitle'>
          {camera && (
            <p className='camera'>{camera}</p>
          )}
        </div>
      </div>
      
    </div>
  );
};
