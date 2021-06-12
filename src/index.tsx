import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import GlobalFonts from './fonts/fonts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts/>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
