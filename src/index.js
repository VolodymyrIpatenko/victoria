import React from 'react';
import ReactDOM from 'react-dom/client';
import { BreakpointProvider } from 'react-socks';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './reset.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BreakpointProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BreakpointProvider>
  </React.StrictMode>
);
