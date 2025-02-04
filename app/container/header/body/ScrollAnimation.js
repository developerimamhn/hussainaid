import React, { useEffect, useState } from 'react';

const ScrollAnimation = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('scrollElement');
    const rect = element.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    setInView(isInView);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="content">Scroll down to see the animation</div>
      <div
        id="scrollElement"
        className={`scroll-element ${inView ? 'in-view' : ''}`}
      >
        This element will animate when it comes into view
      </div>
    </div>
  );
};

export default ScrollAnimation;
