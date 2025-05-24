// src/components/TypedText.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ['Tech Enthusiast', 'Frontend Developer', 'Full Stack Engineer', 'Electronics Enthusiast'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <span ref={el} />
  );
};

export default TypedText;
