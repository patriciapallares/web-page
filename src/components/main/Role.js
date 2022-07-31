import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Role() {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { translateX: -100, translateY: 100 },
      {
        translateX: 0,
        translateY: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    ); // to objects, first and second of the animation
  }, []); // dependency array
  return (
    <>
      <div className='role div4' ref={imgRef}>
        <span className=' role__arrow material-symbols-outlined'>
          turn_slight_right
        </span>
        <h1 className='role__text button-52'>Front-End Developer</h1>
      </div>
    </>
  );
}

export default Role;
