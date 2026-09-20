import React, { useEffect, useRef, useState } from 'react';
import './slideshow-card.css';

export const SlideshowCard = ({
  animalName = [],
  scientificName = [],
  location,
  camera,
  url = [],
  photos = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const cardRef = useRef(null);

  const nextSlide = (e) => {
    e.stopPropagation();

    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % photos.length
    );
  };

  const prevSlide = (e) => {
    e.stopPropagation();

    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const toggleFullscreen = async (e) => {
    e.stopPropagation();

    try {
      if (!document.fullscreenElement) {
        await cardRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement === cardRef.current
      );
    };

    document.addEventListener(
      'fullscreenchange',
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        'fullscreenchange',
        handleFullscreenChange
      );
    };
  }, []);

  // Prevent crashes if there are no photos
  if (photos.length === 0) {
    return null;
  }

  const currentPhoto = photos[currentIndex];

  return (
    <div
      ref={cardRef}
      className={`masonry-item slideshow-card${
        isFullscreen ? ' fullscreen' : ''
      }`}
    >
      <div className="slideshow-image">
        <img
          src={currentPhoto.src}
          alt={
            currentPhoto.alt ||
            `${animalName.join(', ')} slideshow`
          }
          loading="lazy"
        />

        {photos.length > 1 && (
          <>
            <button
              type="button"
              className="nav-btn prev"
              onClick={prevSlide}
              aria-label="Previous photo"
            >
              &#10094;
            </button>

            <button
              type="button"
              className="nav-btn next"
              onClick={nextSlide}
              aria-label="Next photo"
            >
              &#10095;
            </button>
          </>
        )}

        <button
          type="button"
          className="fullscreen-btn"
          onClick={toggleFullscreen}
          aria-label={
            isFullscreen
              ? 'Exit fullscreen'
              : 'View fullscreen'
          }
        >
          {isFullscreen ? '✕' : '⛶'}
        </button>
      </div>

      {photos.length > 1 && (
        <p className="slide-counter">
          {currentIndex + 1} / {photos.length}
        </p>
      )}

      <div className="column">
        {animalName?.map((name, index) => (
          <div className="row--apart" key={name}>
            <p className="animal-name">{name}</p>

            {scientificName?.[index] && (
              <p className="scientific-name">
                {url?.[index] ? (
                  <a
                    href={url[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {scientificName[index]}
                  </a>
                ) : (
                  scientificName[index]
                )}
              </p>
            )}
          </div>
        ))}

        <div className="row--apart subtitle">
          {location && (
            <p className="location">{location}</p>
          )}

          {camera && (
            <p className="camera">{camera}</p>
          )}
        </div>
      </div>
    </div>
  );
};