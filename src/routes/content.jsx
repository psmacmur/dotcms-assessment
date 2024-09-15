// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Page } from '../components/page';
import { useLocation } from 'react-router-dom';

const ContentPage = () => {
  const { pathname } = useLocation();
  console.log('ContentPage', pathname);
  return <Page path={pathname} />;
};

export { ContentPage };
