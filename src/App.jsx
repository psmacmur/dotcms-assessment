// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { useHref, useNavigate, Route, Routes } from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Root } from './routes/root';
import { Home } from './routes/home';
import { ContentPage } from './routes/content';

const App = () => {
  const navigate = useNavigate();
  return (
    <Provider theme={defaultTheme} router={{ navigate, useHref }}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/blog/:page" element={<ContentPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
