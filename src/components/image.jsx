/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Image, View } from '@adobe/react-spectrum';
import ImageLoader from '../utils/imageLoader';

const ImageComponent = (props) => {
  const { fileAsset, title, width, attrs } = props;
  const path = fileAsset?.idPath ?? fileAsset ?? attrs?.src;
  const alt = title ?? attrs?.title;

  // if the path is from blogContent, it's something like
  // https://demo.dotcms.com/dA/a77e64e2ad7f349f8008fd3905c45f8b/asset/fiji-destinations.jpg?language_id=1

  const src = ImageLoader({
    src: path,
    width: width,
  });
  console.log('ImageComponent', src, title);

  return <View>{src && <Image src={src} alt={alt} width={width} />}</View>;
};

export { ImageComponent };
