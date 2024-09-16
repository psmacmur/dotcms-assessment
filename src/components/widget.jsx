/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, Heading, Text, View } from '@adobe/react-spectrum';
import { ImageComponent } from './image';
import { Link, useLocation } from 'react-router-dom';

const Widget = (props) => {
  const { pathname } = useLocation();

  // console.log('Widget', pathname, JSON.stringify(props, null, 3));

  return (
    <Flex
      direction="column"
      gap="size-100"
      alignContent="center"
      alignItems="center"
    >
      <Heading>{props.title}</Heading>
      <Flex direction="row" gap="size-100" wrap justifyContent={'center'}>
        {props.widgetCodeJSON?.posts?.map((post) => {
          return (
            <View
              key={post.title}
              backgroundColor="gray-200"
              width="single-line-width"
              height="size-4000"
              overflow="hidden"
            >
              {/* <Link href={`${pathname}/${post.urlTitle}`}> */}
              <Link to={`${pathname}/${post.urlTitle}`}>
                <Flex direction="column" alignItems="center">
                  {post.image && (
                    <ImageComponent
                      fileAsset={post.image.shortyUrl}
                      title={post.image.meta?.title || post.image.name}
                      width="single-line-width"
                    />
                  )}
                  <Heading alignSelf="center" margin={8}>
                    {post.title}
                  </Heading>
                  <Text margin={8}>{post.teaser}</Text>
                </Flex>
              </Link>
              {/* </Link> */}
            </View>
          );
        })}
      </Flex>
    </Flex>
  );
};

export { Widget };
