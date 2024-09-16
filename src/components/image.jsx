/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Image, View } from '@adobe/react-spectrum';
import ImageLoader from '../utils/imageLoader';

const ImageComponent = ({ fileAsset, title, description, width }) => {
  // console.log('ImageComponent', fileAsset, title, description);
  return (
    <View>
      {fileAsset && (
        <Image
          src={ImageLoader({
            src: fileAsset?.idPath ?? fileAsset,
            width: width,
          })}
          alt={title}
          width={width}
        />
      )}
    </View>
  );
};

export { ImageComponent };
