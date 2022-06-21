import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
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
    </div>
  );
}

export default App;
