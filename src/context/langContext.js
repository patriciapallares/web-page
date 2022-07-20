import React, {useState} from 'react';

import MessageEng from '../languages/en-UK.json'
import MessageEsp from '../languages/es-ES.json'

const langContext = React.createContext();

const LangProvider = ({children}) => {
  const [messages, setMessages] = useState(MessageEng);
  const [locale, setLocale] = useState('en-UK');

  const setLanguage = (language) => {

  }

  return (
    <langContext.Provider value={{setLanguage: setLanguage}}>
      {children}
    </langContext.Provider>
  )
}

export {LangProvider, langContext }