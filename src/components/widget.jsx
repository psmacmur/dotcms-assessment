/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Divider, Flex, Heading } from '@adobe/react-spectrum';
import { useTitle } from '../hooks/useTitle';
import { Post } from './post';

const Widget = (props) => {
  useTitle(props.title);

  // console.log('Widget', props);

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
          return <Post key={props.title} {...post} />;
        })}
      </Flex>
    </Flex>
  );
};

export { Widget };
