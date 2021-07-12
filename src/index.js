import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* wrap BrowserRouter around the <App/> to give the App component all the router related functionalities */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
