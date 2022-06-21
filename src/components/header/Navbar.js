import { Link } from 'react-router-dom';
import React from 'react';

function Navbar(props) {
  const handleXmarkClick = () => {
    props.setNavbarHidden('hidden');
    props.setBurgerHidden('');
  };

  return (
    <div className={`navbar  ${props.navbarHidden} `}>
      <i
        className='navbar__close fa-solid fa-xmark fa-xl'
        onClick={handleXmarkClick}
      ></i>
      <nav>
        <ul className='navbar__list'>
          <li className=' '>
            <Link className='navbar__list__link ' to='/'>Inicio </Link>
          </li>
          <span className='navbar__dash   '> - </span>

          <li className=' hidden'>
            <Link className='navbar__list__link ' to='/CV'>CV </Link>
          </li>
          <span className='navbar__dash hidden  '> - </span>

          <li className=' '>
            <Link className='navbar__list__link ' to='/portfolio'>Portfolio </Link>
          </li>
          <span className='navbar__dash  hidden '> - </span>

          <li className=' hidden'>
            <Link className='navbar__list__link ' to='/contacto'>Contacto </Link>
          </li>
          <span className='navbar__dash  hidden  '> - </span>

          <li className=' hidden '>
            <Link className='navbar__list__link ' to='/blog'>Blog </Link>
          </li>
          <span className='navbar__dash  hidden '> - </span>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
