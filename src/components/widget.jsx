/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, View } from '@adobe/react-spectrum';
import { ImageComponent } from './image';

const VtlInclude = (props) => {
  console.log('Widget', props?.widgetCodeJSON?.posts);

  return (
    <>
      <h2>{props.title}</h2>
      <Flex direction="row" gap="size-100" wrap>
        {props.widgetCodeJSON?.posts?.map((post) => {
          return (
            <View
              key={post.title}
              backgroundColor="gray-200"
              width="single-line-width"
              height="size-4000"
              overflow="hidden"
            >
              <Flex direction="column" alignItems="center">
                <h4>{post.title}</h4>
                {post.image && (
                  <ImageComponent
                    fileAsset={post.image.shortyUrl}
                    title={post.image.meta?.title || post.image.name}
                    description={post.image.description || post.image.file}
                    width="single-line-width"
                  />
                )}
                <span>{post.teaser}</span>
              </Flex>
            </View>
          );
        })}
      </Flex>
    </>
  );
};

export { VtlInclude };
