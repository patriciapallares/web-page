import { Link } from 'react-router-dom';
import React from 'react';
import { useContext , useState } from 'react';

import { FormattedMessage } from 'react-intl';

import es from '../../images/es-ES.png';
import en from '../../images/en-UK.png';

import { langContext } from '../../context/langContext';

function Navbar(props) {
  // language options
  const language = useContext(langContext);

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

  const [esSelected, setEsSelected] = useState('');
  const [enSelected, setEnSelected] = useState('selected');

  // const selectedLang = () => {
  //   if(enSelected === "selected"){
  //     setEsSelected('selected')
  //     setEnSelected('');
  //   } else if (esSelected === "selected"){
  //     setEnSelected('selected')
  //     setEsSelected('');
  //   }
  // }

  const handleESLang = () => {
    language.setLanguage('es-ES')
    if(enSelected === "selected"){
      setEsSelected('selected')
      setEnSelected('');
    }
  }

  const handleENLang = () => {
    language.setLanguage('en-UK')
    if (esSelected === "selected"){
      setEnSelected('selected')
      setEsSelected('');
    }
  }

  // const handleLang = (locale, state, ownset, otherset) => {
  //   language.setLanguage(`${locale}`)
  //   if (state === "selected"){
  //     ownset('selected')
  //     otherset('');
  //   }

  // }

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

          <li className=' hidden'>
            <Link
              className='navbar__list__link '
              to='/CV'
              onClick={handleXmarkClick}
            >
              CV
            </Link>
          </li>
          <span className='navbar__dash hidden  '> - </span>

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

      <div className='navbar__lang'>
        <button
          className={`navbar__lang__button ${esSelected}`}
          // onClick={() => language.setLanguage('es-ES')}
          onClick= {handleESLang}

        >
          {' '}
          ES
        </button>
        <button
          className={`navbar__lang__button ${enSelected}`}
          // onClick={() => language.setLanguage('en-UK')}
          // onClick= {selectedLang}
          onClick= {handleENLang}

        >
          EN
        </button>
      </div>
    </div>
  );
}

export default Navbar;
