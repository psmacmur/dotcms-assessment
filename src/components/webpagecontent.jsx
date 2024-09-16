/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const WebPageContent = ({ title, body }) => {
  console.log('WebPageContent', title);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
};

export { WebPageContent };
