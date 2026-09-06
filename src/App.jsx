import { useState } from 'react'
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
            src={`${import.meta.env.BASE_URL}/photos/landscape/sandpiper-001.jpeg`}
            alt="Featured photography"
          />
      </div>

      <main>
        <section className="hero-content">
          <div className="hero-text">
            <h2>Photography <br/> Portfolio</h2>
            <h3>Benjamin Dutton</h3>
          </div>
        </section>

        <div className='glass'>
          <section id="work" className="work">
            <p>Gallery</p>
            <h2>Recent photographs</h2>
            <div className="gallery">
              <img src={`${import.meta.env.BASE_URL}/photos/landscape/egret-001.jpeg`} alt="Great Egret" />
              <img src={`${import.meta.env.BASE_URL}/photos/landscape/black-widow-001.jpeg`} alt="Southern Black Widow" />
              <img src={`${import.meta.env.BASE_URL}/photos/landscape/crepe-myrtle-001.jpeg`} alt="Crepe Myrtle" />
              
            </div>
          </section>
          <section id="about" className="about">
            <h2>About</h2>
            <p>
              I'm a photographer
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

