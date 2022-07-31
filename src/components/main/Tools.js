import React, { useRef, useEffect } from 'react';

import { FormattedMessage } from 'react-intl';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Tools() {

  const toolsRef = useRef(null);

  useEffect(() => {
    const tools = toolsRef.current;

    gsap.fromTo(
      tools,
      { scale: 1.5, opacity: 0 },
      {
        scale: 1,
        duration: 2,
        opacity: 1,
        scrollTrigger: {
          trigger: tools
        },
      }
    );
  });

  return (
    <section className='tools'>
      <h2 className='tools__title'>
        <FormattedMessage id='tools.title' defaultMessage='Tools' />
      </h2>
      <section  ref={toolsRef}>
        <article className='tools__flex'>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-html5 fa-2xl logos'></i>
            <p className='tools__flex__text'>HTML 5</p>
          </span>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-css3-alt fa-2xl logos'></i>
            <p className='tools__flex__text'>CSS 3</p>
          </span>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-js fa-2xl logos'></i>
            <p className='tools__flex__text'>JavaScript</p>
          </span>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-sass fa-2xl logos'></i>
            <p className='tools__flex__text'>Sass</p>
          </span>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-react fa-2xl logos'></i>
            <p className='tools__flex__text'>React</p>
          </span>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-npm fa-2xl logos'></i>
            <p className='tools__flex__text'>NPM</p>
          </span>
          <span className='tools__flex__item' >
            <i className='fa-brands fa-node-js logos fa-2xl'></i>
            <p className='tools__flex__text'>Node JS</p>
          </span>

          <span className='tools__flex__item'>
            <i className='fa-solid fa-database logos fa-2xl'></i>
            <p className='tools__flex__text'>SQL</p>
          </span>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-git-alt fa-2xl logos'></i>
            <p className='tools__flex__text'>Git</p>
          </span>
        </article>
      </section>
    </section>
  );
}

export default Tools;
