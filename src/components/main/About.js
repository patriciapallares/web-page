import React from 'react';

import { FormattedMessage } from 'react-intl';

function About() {
  return (
    <section className='about'>
      <h2 className='about__title'>
        {' '}
        <FormattedMessage id='about.title' defaultMessage='About' />{' '}
      </h2>
      <p className='about__text'>
        <FormattedMessage id='about.text1' defaultMessage='' />
      </p>
      {/* Creativa pero sistemática. Así describiría a la programación y así me describo a mí misma. Con formación en marketing y tras haber vivido 3 años en el Reino Unido, estoy dispuesta a afrontar nuevos retos, seguir aprendiendo y <span className='about__text__italic'> think outside the: border-box; </span> */}
      <p className='about__text'>
        {' '}
        <FormattedMessage id='about.text2' defaultMessage='' />{' '}
      </p>
      {/* Me considero una persona con ojo para el detalle y aunque soy consciente de que la perfección no existe, aspiro a ella con sucesivas aproximaciones. */}
    </section>
  );
}

export default About;
