// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { useHref, useNavigate, Route, Routes } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Root } from './routes/root';
import { ErrorPage } from './routes/error';

const App = () => {
  const navigate = useNavigate();
  return (
    <Provider theme={defaultTheme} router={{ navigate, useHref }}>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Root />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Provider>
  );
};

export default App;
