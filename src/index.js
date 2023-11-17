import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { persistor, store } from './redux/store';
import {
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import { router } from './routes';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
