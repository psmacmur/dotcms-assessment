/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Image } from '@adobe/react-spectrum';

const Banner = ({ title, caption, image, link, buttonText }) => {
  console.log('Banner', title, caption, image, link, buttonText);
  return (
    <div>
      {image && <Image src={image?.idPath ?? image} alt={title} />}
      {title}
      {caption}
    </div>
  );
};

export { Banner };
