/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, Heading, View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import { ImageComponent } from './image';

const Banner = (props) => {
  const { title, caption, image, link, buttonText } = props;
  console.log('Banner', props);
  return (
    <View>
      {props.image && (
        <ImageComponent fileAsset={props.image} title={props.titleImage} />
      )}
      <Heading alignSelf="center" margin={8}>
        {props.title}
      </Heading>
    </View>
  );
};

export { Banner };
