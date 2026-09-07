import React from 'react';
import './grouped-masonry.css';

export const GroupedMasonry = ({ groups }) => {
  return (
    <div className="grouped-gallery-wrapper">
      {Object.entries(groups).map(([animalName, photos]) => (
        <section key={animalName} className="animal-section">
          
          <h3 className="animal-heading">
            {animalName} <span className="photo-count">({photos.length})</span>
          </h3>
          
          <div className="masonry-container">
            {photos.map((photo, index) => (
              <div key={index} className="masonry-item">
                <img 
                  src={photo.src} 
                  alt={photo.alt || `${animalName} photo`} 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
          
        </section>
      ))}
    </div>
  );
};
