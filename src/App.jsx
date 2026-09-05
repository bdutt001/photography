import { useState } from 'react'
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Benjamin Dutton</h1>

        <div>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <img
            src="/photos/landscape/sandpiper-001.jpeg"
            alt="Featured photography"
          />

          <div className="hero-text">
            <h2>Photography Portfolio</h2>
          </div>
        </section>

        <section id="work" className="work">
          <p>SELECTED WORK</p>
          <h2>Recent photographs</h2>

          <div className="gallery">
            <img src="/photos/landscape/black-widow-001.jpeg" alt="Southern Black Widow" />
            <img src="/photos/landscape/crepe-myrtle.jpeg" alt="Crepe Myrtle" />
            <img src="/photos/landscape/egret-001.jpeg" alt="Great Egret" />
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
          <a href="mailto:hello@example.com">Get in touch</a>
        </section>
      </main>
    </div>
  );
}

export default App;

