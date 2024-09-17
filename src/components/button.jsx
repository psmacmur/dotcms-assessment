/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, Heading, View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import { ImageComponent } from './image';

const Button = (props) => {
  console.log('Button', props.title);
  // const { pathname } = useLocation();

  return (
    <Link to={props.urlMap} aria-description={props.urlTitle}>
      <Flex direction="column" alignItems="center">
        {props.image && (
          <ImageComponent
            fileAsset={props.image}
            title={props.titleImage}
            width="single-line-width"
          />
        )}
        <Heading alignSelf="center" margin={8}>
          {props.title}
        </Heading>
        <View>
          <div dangerouslySetInnerHTML={{ __html: props.body }} />
        </View>
      </Flex>
    </Link>
  );
};

export { Button };
