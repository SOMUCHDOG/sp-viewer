// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TableComponent from './components/TableComponent';
import { PrimeReactProvider, PRimeReactContext } from 'primereact/api';

export default function App({ Component, pageProps }) {
  return (
  <TableComponent />
    /*
      <Routes>
        <Route path="/" element={<TableComponent />} />
      </Routes>
      */
  );
}

