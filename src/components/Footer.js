import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='square'>
        <div className='square__item'></div>
      </div>
      <h2 className='footer__title'>&#60; patricia &#62;</h2>

      <nav>
        <ul className='footer__list'>
          <li className=''>
            <Link className='footer__list__link' to='/'>Inicio </Link>
          </li>
          <span className='footer__dash '> - </span>

          <li className='hidden'>
            <Link className='footer__list__link' to='/CV'>CV </Link>
          </li>
          <span className='footer__dash hidden'> - </span>

          <li className=''>
            <Link className='footer__list__link' to='/portfolio'>Portfolio </Link>
          </li>
          <span className='footer__dash hidden'> - </span>

          <li className='hidden '>
            <Link className='footer__list__link' to='/contacto'>Contacto </Link>
          </li>
          <span className='footer__dash hidden'> - </span>

          <li className='hidden '>
            <Link className='footer__list__link' to='/blog'>Blog </Link>
          </li>
        </ul>
      </nav>

      <div className='links'>
        <p className='footer__text'>Social:</p>
        <ul className='links__list'>
          <li className='links__list__element'>
            <a
              target='__blank'
              className='twitter list__icon'
              href='https://twitter.com/patripalmares'
            >
              <i className='fa-brands fa-twitter fa-xl '></i>
            </a>
          </li>
          <li className='links__list__element'>
            <a
              target='__blank'
              className='linkedin list__icon'
              href='https://www.linkedin.com/in/patriciapallaresgonzalez'
            >
              <i className='fa-brands fa-linkedin-in fa-xl '> </i>
            </a>
          </li>
          <li className='links__list__element'>
            <a
              target='__blank'
              className='github list__icon'
              href='https://github.com/patriciapallares'
            >
              <i className='fa-brands fa-github-alt fa-xl '></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
