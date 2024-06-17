// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { PrimeReactProvider, PRimeReactContext } from 'primereact/api';

export default function App({ Component, pageProps }) {
  return (
  <LoginForm />
    /*
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
      */
  );
}

