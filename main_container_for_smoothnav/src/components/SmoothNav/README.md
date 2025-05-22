# SmoothNav

A responsive navigation bar component with smooth animations for React applications.

## Features

- **Responsive Design**: Automatically adapts to mobile and desktop screens
- **Smooth Animations**: Beautiful transitions for scrolling and menu interactions
- **Theme Toggle**: Built-in light/dark mode support
- **Highly Customizable**: Easy to adapt to your brand colors
- **Mobile-first**: Collapsible hamburger menu for smaller screens
- **Accessible**: Follows accessibility best practices
- **Zero Dependencies**: Pure React and CSS implementation

## Installation

No additional dependencies required. Just copy the component files into your React project:

```
/components
  /SmoothNav
    index.js
    SmoothNav.css
/hooks
  useScrollPosition.js
  useThemeToggle.js
```

## Usage

```jsx
import SmoothNav from './components/SmoothNav';

function App() {
  // Define your navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="app">
      <SmoothNav 
        navItems={navItems} 
        logo="Logo" 
        brandName="Your Brand" 
        showThemeToggle={true}
        defaultTheme="dark"
      />
      
      {/* Rest of your app */}
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| navItems | Array | [] | Array of objects with `label` and `href` properties |
| logo | String/Node | "*" | Logo content (text or React component) |
| brandName | String | "KAVIA AI" | Brand text to display next to logo |
| onNavItemClick | Function | null | Optional callback when navigation items are clicked |
| showThemeToggle | Boolean | true | Whether to show the theme toggle button |
| defaultTheme | String | "dark" | Default theme ("dark" or "light") |

## Customization

You can customize the SmoothNav appearance by modifying the CSS variables in your root CSS:

```css
:root {
  --kavia-orange: #E87A41; /* Primary accent color */
  --kavia-dark: #1A1A1A;   /* Dark background color */
}

/* Theme variables */
.theme-dark {
  --nav-bg: var(--kavia-dark);
  --nav-scrolled-bg: rgba(26, 26, 26, 0.95);
  --nav-text: #ffffff;
  --nav-shadow: rgba(0, 0, 0, 0.2);
}

.theme-light {
  --nav-bg: #ffffff;
  --nav-scrolled-bg: rgba(255, 255, 255, 0.95);
  --nav-text: #333333;
  --nav-shadow: rgba(0, 0, 0, 0.1);
}
```

## Accessibility

SmoothNav includes:
- Proper ARIA attributes for the mobile menu
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators

## License

MIT
