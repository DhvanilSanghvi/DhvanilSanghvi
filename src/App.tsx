import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Portfolio</h1>
        <p>Hi, I'm Dhvanil Sanghvi.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm a passionate web developer and I love building amazing websites.
        </p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          I have a strong background in web development and a keen interest in
          creating user-friendly and visually appealing websites. With my
          knowledge of HTML, CSS, and JavaScript, I strive to deliver high-quality
          websites that provide a great user experience.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Project 1</h3>
          <p>A brief description of project 1.</p>
        </div>
        <div className="Project">
          <h3>Project 2</h3>
          <p>A brief description of project 2.</p>
        </div>
        {/* Add more projects here */}
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <p>
          If you'd like to get in touch or discuss a potential project, feel free
          to reach out to me via email or through the contact form below.
        </p>
        {/* Add a contact form or your contact details here */}
      </section>
      <footer className="App-footer">
        <p>© {new Date().getFullYear()} Dhvanil Sanghvi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
