// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import {
  useHref,
  useNavigate,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { Root } from './routes/root';
import { Home } from './routes/home';
import { ContentPage } from './routes/content';
import { ErrorPage } from './routes/error';

const App = () => {
  const navigate = useNavigate();
  return (
    <Provider theme={defaultTheme} router={{ navigate, useHref }}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/:tab/:page?" element={<ContentPage />} />
          <Route path="/deleted" element={<ErrorPage />} />
          <Route path="*" element={<Home />} />
        </Route>
        {/* <Route path="/" element={<Root />}>
          <Route
            // this path will match URLs like
            // - /teams/hotspur
            // - /teams/real
            path="/:slug/:detail?"
            // the matching param will be available to the loader
            loader={({ params }) => {
              console.log(params.slug, params.detail); // "hotspur"
              return true;
            }}
            // and the action
            action={({ params }) => {
              console.log(params);
              return true;
            }}
            element={<Page />}
          />
        </Route>
        <Route path="/home" element={<Root />} />
        <Route path="/*" element={<ErrorPage />} /> */}
        <Route path="*" element={<Navigate to="/blog" replace />} />
      </Routes>
    </Provider>
  );
};

export default App;
