import React, { useState, useEffect } from 'react';

import MessageEng from '../languages/en-UK.json';
import MessageEsp from '../languages/es-ES.json';

import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localeDefault;
  let messagesDefault;
  const lang = localStorage.getItem('Lang')

  if(lang){
    localeDefault = lang

    if(lang === 'es-ES'){
      messagesDefault = MessageEsp
    } else if (lang === 'en-UK'){
      messagesDefault = MessageEng
    } else {
      localeDefault = 'en-UK'
      messagesDefault = MessageEng
    }
  }

  const [messages, setMessages] = useState(messagesDefault);
  const [locale, setLocale] = useState(localeDefault);

  const setLanguage = (language) => {
    switch (language) {
      case 'es-ES':
        console.log(locale);
        setMessages(MessageEsp);
        setLocale('es-ES');
        localStorage.setItem('Lang', 'es-ES');
        break;
      case 'en-UK':
        console.log(locale);
        setMessages(MessageEng);
        setLocale('en-UK');
        localStorage.setItem('Lang', 'en-UK');
        break;
      default:
        setMessages(MessageEng);
        setLocale('en-UK');
        localStorage.setItem('Lang', 'en-UK');
    }
  };

  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
