import React, { useState, useEffect } from 'react';
import styles from '/styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function ScrollArrow() {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div 
      className={`${styles.scrollArrow} ${!isVisible ? styles.hidden : ''}`} 
      onClick={scrollToContent}
    >
      <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '3rem'}}/>
    </div>
  );
}

export default ScrollArrow;