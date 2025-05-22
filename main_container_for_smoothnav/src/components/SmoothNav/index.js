// PUBLIC_INTERFACE
import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import './SmoothNav.css';

/**
 * SmoothNav - A responsive navigation bar component with smooth animations
 * @param {Object} props - Component props
 * @param {Array} props.navItems - Array of navigation items with label and href
 * @param {string} props.logo - Logo content (text or component)
 * @param {string} props.brandName - Brand name to display next to logo
 * @param {Function} props.onNavItemClick - Optional callback for nav item clicks
 * @param {boolean} props.showThemeToggle - Whether to show the theme toggle button
 * @param {string} props.defaultTheme - Default theme to use ('light' or 'dark')
 * @returns {JSX.Element} - SmoothNav component
 */
const SmoothNav = ({ 
  navItems = [], 
  logo = "*", 
  brandName = "KAVIA AI", 
  onNavItemClick = null,
  showThemeToggle = true,
  defaultTheme = 'dark'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const { isPastThreshold } = useScrollPosition(60);
  const { theme, toggleTheme } = useThemeToggle(defaultTheme);

  // Close mobile menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector('.smooth-nav__menu');
      const hamburger = document.querySelector('.smooth-nav__hamburger');
      
      if (
        isOpen && 
        navMenu && 
        hamburger && 
        !navMenu.contains(event.target) && 
        !hamburger.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle scroll to section for anchor links
  const handleNavClick = (e, href, label) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
        
        setActiveItem(label);
        setIsOpen(false);
      }
    }

    // Call optional callback if provided
    if (onNavItemClick) {
      onNavItemClick(href, label);
    }
    
    setIsOpen(false);
  };

  return (
    <nav className={`smooth-nav ${isPastThreshold ? 'smooth-nav--scrolled' : ''}`}>
      <div className="smooth-nav__container">
        <div className="smooth-nav__brand">
          <span className="smooth-nav__logo">{logo}</span>
          <span className="smooth-nav__brand-name">{brandName}</span>
        </div>

        {/* Mobile hamburger menu button */}
        <button 
          className={`smooth-nav__hamburger ${isOpen ? 'smooth-nav__hamburger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation menu */}
        <div className={`smooth-nav__menu ${isOpen ? 'smooth-nav__menu--open' : ''}`}>
          <ul className="smooth-nav__list">
            {navItems.map((item, index) => (
              <li key={index} className="smooth-nav__item">
                <a 
                  href={item.href}
                  className={`smooth-nav__link ${activeItem === item.label ? 'smooth-nav__link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* Theme toggle button */}
            {showThemeToggle && (
              <li className="smooth-nav__item smooth-nav__item--theme-toggle">
                <button 
                  className="smooth-nav__theme-toggle"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <span className="smooth-nav__theme-icon">
                    {theme === 'dark' ? '☀️' : '🌙'}
                  </span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SmoothNav;
