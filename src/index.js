import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { LangProvider } from './context/langContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LangProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </LangProvider>
);
