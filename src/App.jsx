// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './App.css';
import {
  useHref,
  useLocation,
  useNavigate,
  Route,
  Routes,
} from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Root } from './routes/root';
import { Home } from './routes/home';
import { ContentPage } from './routes/content';
import { base } from './utils/url';

const App = () => {
  const navigate = useNavigate();

  // Redirect to Home
  const { pathname } = useLocation();
  console.log(pathname);
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      if (pathname === '/') {
        navigate('/index');
      }
    }
  }, [pathname, initialLoad]);

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
