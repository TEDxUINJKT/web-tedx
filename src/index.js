import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './router'

import { Provider } from 'react-redux';
import { store } from './state/store';

import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);

