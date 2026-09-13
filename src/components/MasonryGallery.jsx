import useState from 'react';
import { SlideshowCard } from './SlideshowCard';
import './masonry-gallery.css'; 

export const MasonryGallery = ({ groups }) => {

  // const [selectedFilters, setSelectedFilters] = useState<string>([]);
  return (
    <div className="masonry-container">
      {Object.entries(groups).map(([animalName, data]) => (
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
  );
};
