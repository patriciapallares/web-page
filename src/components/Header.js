import React, { useRef, useEffect, useState } from 'react';

import Navbar from '../components/header/Navbar';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import LanguageBtn from './header/LanguageBtn';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// TODO control lang variable so it changes in both flags and button menus. Probar con useEffect

function Header() {
  const [locale, setLocale] = useState('');

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

  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;

    gsap.fromTo(
      div,
      { delay: 3, opacity: 0 },
      {
        delay: 3,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: div,
        },
      }
    );
  }, []); // dependency array

  return (
    <header className='header' id='top' ref={divRef}>
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
              CV
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
              Contacto
            </Link>
          </li>
          <span className='header__dash hidden  '> - </span>
          <li className=' hidden  '>
            <Link className='header__list__link' to='/blog'>
              Blog
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
