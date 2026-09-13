import { useState } from 'react';
import { SlideshowCard } from './SlideshowCard';
import './masonry-gallery.css';

export const MasonryGallery = ({ groups }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = ['flora', 'fauna', 'fungi', 'landscape'];

  const toggleFilter = (filter) => {
    setSelectedFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    );
  };

  const filteredGroups = Object.entries(groups).filter(
    ([, data]) =>
      selectedFilters.length === 0 ||
      selectedFilters.includes(data.category)
  );

  return (
    <>
      <div className="gallery-filters">
        {filters.map((filter) => {
          const isSelected = selectedFilters.includes(filter);

          return (
            <button
              key={filter}
              type="button"
              className= {isSelected ? 'button active' : 'button'}
              onClick={() => toggleFilter(filter)}
              aria-pressed={isSelected}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          );
        })}
      </div>

      <div className="masonry-container">
        {filteredGroups.map(([animalName, data]) => (
          <SlideshowCard
            key={animalName}
            animalName={animalName}
            scientificName={data.scientificName}
            location={data.location}
            camera={data.camera}
            date={data.date}
            url={data.url}
            photos={data.photos}
          />
        ))}
      </div>
    </>
  );
};
