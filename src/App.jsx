// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { defaultTheme, Provider } from '@adobe/react-spectrum';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import { ErrorPage } from './routes/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Provider theme={defaultTheme}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
