import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false); // State to determine visibility of the button

  // Function to toggle button visibility based on scroll position
  const toggleVisible = () => {
    setVisible(window.scrollY > 100); // Set visibility based on scroll position
  };

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Effect to add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    
    return () => {
      window.removeEventListener('scroll', toggleVisible); // Clean up on unmount
    };
  }, []);

  return (
    <a 
      href="#top" 
      className={`back-top-btn ${visible ? 'active' : ''}`} 
      aria-label="Back to top" 
      onClick={scrollToTop}
    >
      <ion-icon name="chevron-up" aria-hidden="true" />
    </a>
  );
};

export default BackToTop;