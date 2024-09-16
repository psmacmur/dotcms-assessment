// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Page } from '../components/page';
import { useLocation } from 'react-router-dom';
import { splitUrlPath } from '../utils/url';

const blogPath = (slug) => {
  return `/blog/post/${slug}`;
};
const ContentPage = () => {
  const { pathname } = useLocation();
  const segments = splitUrlPath(pathname);
  const backendPath =
    segments.length > 1 && segments[0] === 'blog'
      ? blogPath(segments[1])
      : pathname;
  console.log('ContentPage', pathname);
  return <Page path={backendPath} />;
};

export { ContentPage };
