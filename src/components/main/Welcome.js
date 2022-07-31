import React, { useRef, useEffect } from 'react';

import profilePic from '../../images/fptp.jpg';
import Role from './Role';

import { FormattedMessage } from 'react-intl';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Welcome() {
  const divRef = useRef(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;
    const name = nameRef.current;
    const text = textRef.current;

    gsap.fromTo(
      div,
      { delay: 2, translateX: -50, opacity: 0 },
      {
        delay: 2,
        translateX: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: div,
        },
      }
    ); // to objects, first and second of the animation
    gsap.fromTo(
      name,
      { delay: 0, translateX: -50, opacity: 0 },
      {
        delay: 0,
        translateX: 0,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: name,
        },
      }
    ); // to objects, first and second of the animation
    gsap.fromTo(
      text,
      { delay: 1, translateX: -50, opacity: 0 },
      {
        delay: 1,
        translateX: 0,
        duration: 0.8,
        opacity: 1,
        scrollTrigger: {
          trigger: text,
        },
      }
    ); // to objects, first and second of the animation
  }, []); // dependency array

  return (
    <article className='welcome'>
      <div className='welcome__imgdiv div1' ref={divRef}>
        <img
          src={profilePic}
          alt='foto Patricia'
          title='foto Patricia'
          className='welcome__imgdiv__photo'
        />
        <Role />
      </div>
      <p className='welcome__title div2' ref={nameRef}>
        &#60; patricia &#62;
      </p>

      <p className='welcome__pa div3' ref={textRef}>
        <FormattedMessage
          id='app.welcome'
          defaultMessage='Hello hello! Patricia here! Learn more about me on this page. Shall we connect?'
        />
        <span>&#128075;</span>
      </p>
      {/* Welcome user! Mi primer proyecto personal: mi página de portfolio.
Espero que te entretenga un poco lo que veas y que te animes a darme
feedback :D */}
    </article>
  );
}

export default Welcome;
