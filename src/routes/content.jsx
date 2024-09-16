// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BlogPage } from '../components/blogpage';
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
  return <BlogPage path={backendPath} />;
};

export { ContentPage };
