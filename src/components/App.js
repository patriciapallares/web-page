import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';

import { IntlProvider , FormattedMessage} from 'react-intl';
import MessageEng from '../languages/en-UK.json'
import MessageEsp from '../languages/es-ES.json'

import {langContext} from '../context/langContext'

function App() {

  const language = useContext(langContext)
console.log(language);

  return (
    <IntlProvider locale="es-ES" messages={MessageEsp}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/portfolio'
            element={
              <>
                <Header />
                <Portfolio />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </IntlProvider>
  );
}

export default App;
