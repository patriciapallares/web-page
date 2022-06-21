import React from 'react';

function About() {
  return (
    <section className='about'>
      <h2 className='about__title'>About</h2>
      <p className='about__text'>
      Creativa pero sistemática. Así describiría a la programación y así me describo a mí misma. Con formación en marketing y tras haber vivido 3 años en el Reino Unido, estoy dispuesta a afrontar nuevos retos, seguir aprendiendo y <span className='about__text__italic'> think outside the: border-box; </span>
      </p>
      <p className='about__text'>
      Me considero una persona con ojo para el detalle y aunque soy consciente de que la perfección no existe, aspiro a ella con sucesivas aproximaciones.
      </p>
    </section>
  );
}

export default About;
