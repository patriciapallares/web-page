import { Link } from 'react-router-dom';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import LanguageBtn from './LanguageBtn';


function Navbar(props) {

  const handleXmarkClick = () => {
    props.setNavbarHidden('hidden');
    props.setBurgerHidden('');
  };

  /**
   * Desplaza la página hasta la parte superior.
   */
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };


  return (
    <div className={`navbar  ${props.navbarHidden} `}>
      <i
        className='navbar__close fa-solid fa-xmark fa-xl'
        onClick={handleXmarkClick}
      ></i>
      <nav>
        <ul className='navbar__list'>
          <li className='' onClick={scrollUp}>
            <Link
              className='navbar__list__link '
              to='/'
              onClick={handleXmarkClick}
            >
              <FormattedMessage id='menu.home' defaultMessage='Home' />
            </Link>
          </li>
          <span className='navbar__dash   '> - </span>

          <li className=''>
            <Link
              className='navbar__list__link '
              to='/cv'
              onClick={handleXmarkClick}
            >
              CV
            </Link>
          </li>
          <span className='navbar__dash'> - </span>

          <li className=' ' onClick={scrollUp}>
            <Link
              className='navbar__list__link '
              to='/portfolio'
              onClick={handleXmarkClick}
            >
              <FormattedMessage
                id='menu.portfolio'
                defaultMessage='Portfolio'
              />
            </Link>
          </li>
          <span className='navbar__dash  hidden '> - </span>

          <li className=' hidden'>
            <Link
              className='navbar__list__link '
              to='/contacto'
              onClick={handleXmarkClick}
            >
              Contacto
            </Link>
          </li>
          <span className='navbar__dash  hidden  '> - </span>

          <li className=' hidden '>
            <Link
              className='navbar__list__link '
              to='/blog'
              onClick={handleXmarkClick}
            >
              Blog
            </Link>
          </li>
          <span className='navbar__dash  hidden '> - </span>
        </ul>
      </nav>

      <LanguageBtn 
      updateLocale={props.updateLocale}
      locale={props.locale}
      class={'navbar__lang'} />
      
    </div>
  );
}

export default Navbar;
