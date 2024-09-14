/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const WebPageContent = ({ title, body }) => {
  return (
    <>
      <h1 className="text-xl font-bold">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
};

export { WebPageContent };
