/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Image } from '@adobe/react-spectrum';

const ImageComponent = ({ fileAsset, title, description }) => {
  return (
    <div className="relative overflow-hidden bg-white rounded shadow-lg group">
      <div className="relative w-full bg-gray-200 h-96">
        {fileAsset && (
          <Image src={fileAsset?.idPath ?? fileAsset} alt={title} />
        )}
      </div>
      <div className="absolute bottom-0 w-full px-6 py-8 text-white transition-transform duration-300 translate-y-full bg-orange-500 bg-opacity-80 w-100 group-hover:translate-y-0">
        <div className="mb-2 text-2xl font-bold">{title}</div>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export { ImageComponent };
