// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Gets the current path

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Re-runs when the path changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;