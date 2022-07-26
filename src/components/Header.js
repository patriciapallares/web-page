import { useState , useContext } from 'react';
import Navbar from '../components/header/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';
import es from '../images/es-ES.png';
import en from '../images/en-UK.png';

import { FormattedMessage } from 'react-intl';
import {langContext} from '../context/langContext'

function Header() {


  // language options
  const language = useContext(langContext);

  // burger menu
  const handleBurgerClick = () => {
    console.log('soy');
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
      <div className='header__flags'>
        <button 
        className='header__flags__button'
        onClick={() => language.setLanguage('es-ES')}
        ><img className='header__flags__image' src={es} alt="" ></img></button>
        <button 
        className='header__flags__button'
        onClick={() => language.setLanguage('en-UK')}
        ><img className='header__flags__image' src={en} alt="" ></img></button>

      </div>
    </header>
  );
}

export default Header;
