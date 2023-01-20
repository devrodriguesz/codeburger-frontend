import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import MyRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';
import AppProvider from './hooks/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvider>
      <MyRoutes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
);