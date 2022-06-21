import React from 'react';

function Tools() {
  return (
    <section className='tools'>
      <h2 className='tools__title'>Tools</h2>
      <section>
        <article className='tools__flex'>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-html5 fa-2xl logos'></i>
            <p className='tools__flex__text'>HTML 5</p>
          </span>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-css3-alt fa-2xl logos'></i>
            <p className='tools__flex__text'>CSS 3</p>
          </span>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-js fa-2xl logos'></i>
            <p className='tools__flex__text'>JavaScript</p>
          </span>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-sass fa-2xl logos'></i>{' '}
            <p className='tools__flex__text'>Sass</p>
          </span>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-react fa-2xl logos'></i>
            <p className='tools__flex__text'>React</p>
          </span>
          <span className='tools__flex__item'>
            <i className='fa-brands fa-npm fa-2xl logos'></i>
            <p className='tools__flex__text'>NPM</p>
          </span>
          <span className='tools__flex__item'>
            <i className="fa-brands fa-node-js logos fa-2xl"></i>
            <p className='tools__flex__text'>Node JS</p>
          </span>

          <span className='tools__flex__item'>
          <i className="fa-solid fa-database logos fa-2xl"></i>
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
