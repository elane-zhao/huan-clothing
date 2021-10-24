import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* wrap all with Provider component, to give access to redux store object across the application  */}
    <Provider store={store}>
      <BrowserRouter>
        {/* wrap BrowserRouter around the <App/> to give the App component all the router related functionalities */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
