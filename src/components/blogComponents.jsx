/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View } from '@adobe/react-spectrum';
import { contentMap } from './contentMap';

/**
 * Component to render when there is no component for the content type.
 *
 * @param {{ readonly contentType: string }} { contentType }
 * @return {*}
 */
const NoComponent = ({ contentType }) => {
  return <div data-testid="no-component">No Component for {contentType}</div>;
};

const BlogComponent = ({ contentItem, key }) => {
  const component = contentMap[contentItem.type];
  console.log(contentItem.type);
  if (component) {
    return <View key={key}>{component(contentItem)}</View>;
  }
  return <NoComponent key={key} contentType={contentItem.type} />;
};

export { NoComponent, BlogComponent };
