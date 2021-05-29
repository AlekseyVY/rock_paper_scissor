import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './global/styles/fonts.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
