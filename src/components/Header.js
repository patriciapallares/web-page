import { useState } from 'react';
import Navbar from '../components/header/Navbar';
import { Link } from 'react-router-dom';
import React from 'react';


function Header() {
  const handleBurgerClick = () => {
    console.log('soy');
    setBurgerHidden('hidden');
    setNavbarHidden('');
  };

  const [burgerHidden, setBurgerHidden] = useState('');
  const [navbarHidden, setNavbarHidden] = useState('hidden');

  return (
    <header className='header hidden' id='top'>
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
            <Link className='header__list__link' to='/'>Inicio </Link>
          </li>
          <span className='header__dash   '> - </span>
          <li className='  hidden '>
            <Link className='header__list__link' to='/CV'>CV </Link>
          </li>
          <span className='header__dash hidden  '> - </span>
          <li className=''>
            <Link className='header__list__link' to='/portfolio'>Portfolio </Link>
          </li>
          <span className='header__dash  hidden '> - </span>
          <li className=' hidden  '>
            <Link className='header__list__link' to='/contacto'>Contacto </Link>
          </li>
          <span className='header__dash hidden  '> - </span>
          <li className=' hidden  '>
            <Link className='header__list__link' to='/blog'>Blog </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
