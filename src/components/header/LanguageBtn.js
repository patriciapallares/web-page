import React from 'react';

import { useContext, useState } from 'react';

import { langContext } from '../../context/langContext';

function LanguageBtn(props) {
  // language options
  const language = useContext(langContext);
  const langLS = localStorage.getItem('Lang');
  // const [locale, setLocale] = useState('');

  // devuelve selected cuando se cumple que un idioma ha sido devuelto del LS o lo ha pulsado el user, entonces cambia el estado
  const isSelected = (lng) => {
    if(langLS === lng || props.locale === lng ){
      return 'selected'
    }
  }

  const [esSelected, setEsSelected] = useState(isSelected('es-ES'));
  const [enSelected, setEnSelected] = useState(isSelected('en-UK'));

  let classBtn = props.class

  const handleESLang = () => {
    language.setLanguage('es-ES');
    props.updateLocale('es-ES');
    if (enSelected === 'selected') {
      setEsSelected('selected');
      setEnSelected('');
    }
  };


  const handleENLang = () => {
    language.setLanguage('en-UK');
    props.updateLocale('en-UK');
    if (esSelected === 'selected') {
      setEnSelected('selected');
      setEsSelected('');
    }
  };


  return (
    <div className={classBtn}>
      {' '}
      <button
        className={`${classBtn}__button ${classBtn}__${esSelected}`}
        // onClick={() => language.setLanguage('es-ES')}
        onClick={handleESLang}
      >
        {' '}
        ES
      </button>
      <button
        className={`${classBtn}__button ${classBtn}__${enSelected}`}
        // onClick={() => language.setLanguage('en-UK')}
        // onClick= {selectedLang}
        onClick={handleENLang}
      >
        EN
      </button>{' '}
    </div>
  );
}

export default LanguageBtn;
