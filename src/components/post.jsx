/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, Heading, Text, View } from '@adobe/react-spectrum';
import { ImageComponent } from './image';
import { Link, useLocation } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

const Post = (props) => {
  const { pathname } = useLocation();
  useTitle(props.title);

  console.log('Post', pathname, props);

  return (
    <View
      backgroundColor="gray-200"
      width="single-line-width"
      height="size-4000"
      overflow="hidden"
      borderWidth="thin"
      borderColor="dark"
      borderRadius="small"
    >
      <Link
        to={`${pathname}/${props.urlTitle}`}
        onClick={() => {
          window.sessionStorage.setItem('heroImage', props.image.shortyUrl);
        }}
      >
        <Flex direction="column" alignItems="center">
          {props.image && (
            <ImageComponent
              fileAsset={props.image.shortyUrl}
              title={props.image.meta?.title || props.image.name}
              width="single-line-width"
            />
          )}
          <Heading alignSelf="center" margin={8}>
            {props.title}
          </Heading>
          <Text margin={8}>{props.teaser}</Text>
        </Flex>
      </Link>
    </View>
  );
};

export { Post };
