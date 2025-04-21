import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hi, I'm Ruhan Shamshad</h1>
        <p className="home-description">I'm a Frontend Developer. Welcome to my portfolio!</p>
        <section className="skills-section">
          <h2 className="skills-title">My Skills</h2>
          <ul className="skills-list">
            <li>React Js</li>
            <li>Next Js</li>
            <li>Firebase</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
