import { useState } from 'react';
import Navbar from '../components/header/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import LanguageBtn from './header/LanguageBtn';

// TODO control lang variable so it changes in both flags and button menus

function Header() {
  const [locale, setLocale] = useState('');

  console.log(locale);
  const updateLocale = (locale) => {
    setLocale(locale);
  };

  // burger menu
  const handleBurgerClick = () => {
    setBurgerHidden('hidden');
    setNavbarHidden('');
  };

  const [burgerHidden, setBurgerHidden] = useState('');
  const [navbarHidden, setNavbarHidden] = useState('hidden');

  return (
    <header className='header' id='top'>
      <i
        className={`fa-solid burger fa-bars fa-xl ${burgerHidden}`}
        onClick={handleBurgerClick}
      ></i>

      <Navbar
        burgerHidden={burgerHidden}
        setBurgerHidden={setBurgerHidden}
        navbarHidden={navbarHidden}
        setNavbarHidden={setNavbarHidden}
        updateLocale={updateLocale}
        locale={locale}
      />
      <nav>
        <ul className='header__list'>
          <li className='   '>
            <Link className='header__list__link' to='/'>
              <FormattedMessage id='menu.home' defaultMessage='Home' />
            </Link>
          </li>
          <span className='header__dash   '> - </span>
          <li className='  hidden '>
            <Link className='header__list__link' to='/CV'>
              CV{' '}
            </Link>
          </li>
          <span className='header__dash hidden  '> - </span>
          <li className=''>
            <Link className='header__list__link' to='/portfolio'>
              <FormattedMessage
                id='menu.portfolio'
                defaultMessage='Portfolio'
              />
            </Link>
          </li>
          <span className='header__dash  hidden '> - </span>
          <li className=' hidden  '>
            <Link className='header__list__link' to='/contacto'>
              Contacto{' '}
            </Link>
          </li>
          <span className='header__dash hidden  '> - </span>
          <li className=' hidden  '>
            <Link className='header__list__link' to='/blog'>
              Blog{' '}
            </Link>
          </li>
        </ul>
      </nav>
      <div className='header__lang'>
        <LanguageBtn
          updateLocale={updateLocale}
          locale={locale}
          class={'header__lang'}
        />
      </div>
    </header>
  );
}

export default Header;
