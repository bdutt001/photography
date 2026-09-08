import { useState } from 'react'

import { GroupedMasonry } from './components/GroupedMasonry';
import { MasonryGallery } from './components/MasonryGallery';

import { photoGroups } from './data/photos';

import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1></h1>
        <div>
          <a href="#work">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

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
            <h3>Photography</h3>
          </div>
        </section>

        <div className='glass'>
          <section id="work" className="work">
            <h1>Gallery</h1>
            
            <section id='flora' className='category'>
              <MasonryGallery groups={photoGroups} />
            </section>
          </section>
          <section id="about" className="about">
            <h2>About</h2>
            <p>
              I'm a hobbyist photographer based in Chesapeake, Virginia.
            </p>
          </section>
          <section id="contact" className="contact">
            <h2>Let's work together.</h2>
            <a href="mailto:bendutton9@gmail.com">Get in touch</a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

