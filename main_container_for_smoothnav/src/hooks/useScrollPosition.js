// PUBLIC_INTERFACE
import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position
 * @returns {Object} - Object containing scroll position and whether scroll is past threshold
 */
export const useScrollPosition = (threshold = 50) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsPastThreshold(position > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler right away to update initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { scrollPosition, isPastThreshold };
};
