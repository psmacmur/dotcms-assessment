// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ContentletsPage } from '../components/contentlets';
import { useLocation } from 'react-router-dom';

/// DotcmsLayout doesn't seem to handle the Destinations page, which seems to render from Contentlets
const DestinationsPage = (props) => {
  const { pathname } = useLocation();
  console.log('DestinationsPage', pathname, props);
  return <ContentletsPage />;
};

export { DestinationsPage };
