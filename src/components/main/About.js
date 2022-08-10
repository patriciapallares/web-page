import React, { useRef, useEffect } from 'react';

import { FormattedMessage } from 'react-intl';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const textRef = useRef(null);
  const text2Ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const text2 = text2Ref.current;
    const title = titleRef.current;

    gsap.fromTo(
      text,
      { translateY: 50, opacity: 0 },
      {
        translateY: 0,
        duration: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: text,
        },
      }
    );
    gsap.fromTo(
      text2,
      { translateY: 50, opacity: 0 },
      {
        delay: 0.5,
        translateY: 0,
        duration: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: text2,
        },
      }
    );
    gsap.fromTo(
      title,
      { opacity: 0 },
      {
        duration: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: title,
        },
      }
    );
  });

  return (
    <section className='about'>
      <h2 className='about__title' ref={titleRef}>
        <FormattedMessage id='about.title' defaultMessage='About' />
      </h2>
      <p className='about__text' ref={textRef}>
        <FormattedMessage id='about.text1' defaultMessage='A creative, but systematic individual; I am fresh from an intensive bootcamp in front-end development and am eager to start work as a Junior Front-end Developer for your company.' />
      </p>
      {/* Creativa pero sistemática. Así describiría a la programación y así me describo a mí misma. Con formación en marketing y tras haber vivido 3 años en el Reino Unido, estoy dispuesta a afrontar nuevos retos, seguir aprendiendo y <span className='about__text__italic'> think outside the: border-box; </span> */}
      <p className='about__text' ref={text2Ref}>
        <FormattedMessage id='about.text2' defaultMessage='I am fluent in three languages and come from a Marketing background – something that I utilise every time I am developing a project. Ensuring the consumers needs and desires are always at the centre of my work.' />
      </p>
      {/* Me considero una persona con ojo para el detalle y aunque soy consciente de que la perfección no existe, aspiro a ella con sucesivas aproximaciones. */}
    </section>
  );
}

export default About;
