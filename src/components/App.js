import '../styles/main.scss';
import Header from './header/Header';
import Footer from './Footer';
import Main from './main/Main';

import React, {useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';

import { IntlProvider , FormattedMessage} from 'react-intl';
import MessageEng from '../languages/en-UK.json'
import MessageEsp from '../languages/es-ES.json'

import {langContext} from '../context/langContext'

function App() {

  const language = useContext(langContext)

  return (
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
      </div>  );
}

export default App;
