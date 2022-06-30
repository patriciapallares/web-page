import React from 'react';

import profilePic from '../../images/fptp.jpg';
import Role from './Role';

function Welcome() {
  return (
    <article className='welcome'>
      <div className='welcome__imgdiv div1'>
        <img
          src={profilePic}
          alt='foto Patricia'
          title='foto Patricia'
          className='welcome__imgdiv__photo'
        />
      </div>
      <p className='welcome__title div2'> &#60; patricia &#62; </p>
      <p className='welcome__pa div3'> 
        Hola, hello! <span>&#128075;</span> Patricia al teclado. Conoce más sobre mí en esta página <span>&#128522;</span> ¿Conectamos?
        {/*
Welcome user! Mi primer proyecto personal: mi página de portfolio.
Espero que te entretenga un poco lo que veas y que te animes a darme
feedback :D */}
      </p>
      <Role />

    </article>
  );
}

export default Welcome;
