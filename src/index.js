import React from 'react';
import ReactDOM from 'react-dom/client';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './reset.css';
import { DarkModeProvider } from './components/context/DarkModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <BreakpointProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BreakpointProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
