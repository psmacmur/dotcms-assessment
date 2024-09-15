/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, View } from '@adobe/react-spectrum';

const VtlInclude = (props) => {
  console.log('Widget', props?.widgetCodeJSON?.posts);

  return (
    <>
      <h2>{props.title}</h2>
      <Flex direction="row" width="size-10000" gap="size-100">
        {props.widgetCodeJSON?.posts?.map((post) => {
          return (
            <View key={post.title} backgroundColor="blue-400">
              <h3>{post.title}</h3>
              {post.teaser}
            </View>
          );
        })}
      </Flex>
    </>
  );
};

export { VtlInclude };
