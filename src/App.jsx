import { useState } from 'react'

import { GroupedMasonry } from './components/GroupedMasonry';
import { MasonryGallery } from './components/MasonryGallery';

import { photoGroups } from './data/photos';
import Portrait from "./assets/Ben_D.png";

import "./App.css";

function App() {
  return (
    <div>
      <div className="hero">
          <img
            src={`${import.meta.env.BASE_URL}/photos/fauna/willet-003.jpeg`}
            alt="Featured photography"
          />
      </div>

      <main>
        <section className="hero-content">
          <div className="hero-text">
            <h2>Benjamin Dutton</h2>
            <h3>Wildlife and Landscape Photography</h3>
          </div>
          <div className='row--apart'>
            <a className='button' href="#work">Gallery</a>
            <a className='button' href="#contact">Contact</a>
          </div>
        </section>
        <div className='glass'>
          <section id="work" className="work">
            <h1>Gallery</h1>
            
            <section id='flora' className='category'>
              <MasonryGallery groups={photoGroups} />
            </section>
          </section>

          <section id="contact" className="contact">
            <h1>Contact</h1>
            <p></p>
            <a className='button' href="mailto:bendutton9@gmail.com">Email</a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

