import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';
//import App from './App';
import router from './App';
import './styles.css';

const getDiv = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(getDiv)

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </GoogleOAuthProvider>,
)