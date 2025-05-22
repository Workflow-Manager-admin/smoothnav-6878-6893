import React from 'react';
import SmoothNav from './components/SmoothNav';
import './App.css';

function App() {
  // Sample navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="app">
      {/* SmoothNav component */}
      <SmoothNav 
        navItems={navItems} 
        logo="*" 
        brandName="SmoothNav" 
        showThemeToggle={true}
        defaultTheme="dark"
      />

      {/* Main content sections for navigation */}
      <main>
        {/* Home Section */}
        <section id="home" className="section section--hero">
          <div className="container">
            <div className="hero">
              <div className="subtitle">Responsive & Animated</div>
              <h1 className="title">SmoothNav</h1>
              <div className="description">
                A modern responsive navigation bar with smooth animations for React applications.
                Scroll down to see the navbar animation effect or resize your window to see the 
                responsive mobile menu.
              </div>
              <a href="#features" className="btn btn-large">Explore Features</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section section--features">
          <div className="container">
            <h2 className="section__title">Features</h2>
            <div className="features">
              <div className="feature">
                <h3 className="feature__title">Responsive Design</h3>
                <p className="feature__description">
                  Fully responsive layout that works on all devices and screen sizes.
                  Toggle the mobile hamburger menu on smaller screens.
                </p>
              </div>
              <div className="feature">
                <h3 className="feature__title">Smooth Animations</h3>
                <p className="feature__description">
                  Beautiful transitions and animations for a modern user experience.
                  Notice the smooth scrolling and hover effects.
                </p>
              </div>
              <div className="feature">
                <h3 className="feature__title">Customizable</h3>
                <p className="feature__description">
                  Easily customize colors, animations, and behavior to match your brand.
                  Uses CSS variables for theming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section section--about">
          <div className="container">
            <h2 className="section__title">About</h2>
            <div className="about">
              <p className="about__text">
                SmoothNav is a lightweight and customizable navigation component for React applications.
                It features smooth animations, responsive design, and easy integration.
              </p>
              <p className="about__text">
                Built with modern web standards and best practices, SmoothNav provides an excellent 
                user experience on all devices without requiring any external libraries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section section--contact">
          <div className="container">
            <h2 className="section__title">Contact</h2>
            <div className="contact">
              <p className="contact__text">
                Interested in using SmoothNav for your project? Have questions or feedback?
              </p>
              <button className="btn btn-large">Get In Touch</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2023 SmoothNav - A responsive navigation component for React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
