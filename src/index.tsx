import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';
import './styles.css';

const getDiv = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(getDiv)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)