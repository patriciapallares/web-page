import React, { useState } from 'react';

import MessageEng from '../languages/en-UK.json';
import MessageEsp from '../languages/es-ES.json';

import { IntlProvider } from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [messages, setMessages] = useState(MessageEng);
  const [locale, setLocale] = useState('en-UK');


  const setLanguage = (language) => {
    console.log('soy un click');
    console.log('messages',messages);
    console.log('locale',locale);
  
    switch (language) {
      case 'es-ES':
        setMessages(MessageEsp);
        setLocale('es-ES');
        break;
      case 'en-UK':
        setMessages(MessageEng);
        setLocale('en-UK');
        break;
      default:
        setMessages(MessageEng);
        setLocale('en-UK');
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
