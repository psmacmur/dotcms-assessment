/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Divider, Flex, Heading, Text, View } from '@adobe/react-spectrum';
import { ImageComponent } from './image';
import { Link, useLocation } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

const Widget = (props) => {
  const { pathname } = useLocation();
  useTitle(props.title);

  console.log('Widget', pathname, props);

  return (
    <Flex
      direction="column"
      gap="size-100"
      alignContent="center"
      alignItems="center"
    >
      <Divider />
      <Flex direction="row" gap="size-100" wrap justifyContent={'center'}>
        {props.widgetTitle && !props.widgetCodeJSON?.posts && (
          <Heading level={2}>{props.widgetTitle}</Heading>
        )}

        {props.widgetCodeJSON?.posts?.map((post) => {
          return (
            <View
              key={post.title}
              backgroundColor="gray-200"
              width="single-line-width"
              height="size-4000"
              overflow="hidden"
              borderWidth="thin"
              borderColor="dark"
              borderRadius="small"
            >
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
            </View>
          );
        })}
      </Flex>
    </Flex>
  );
};

export { Widget };
