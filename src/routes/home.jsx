// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Page } from '../components/page';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();
  console.log('Home', pathname);
  return <Page path="/blog" />;
};

export { Home };
