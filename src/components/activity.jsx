/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Heading, Flex, Text, View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import { ImageComponent } from './image';
import { EmblaCarousel } from './carousel';

const Activity = (props) => {
  console.log('Activity', props);
  // const { pathname } = useLocation();

  return (
    <Link to={props.urlMap} aria-description={props.urlTitle}>
      <Flex direction="column" UNSAFE_className="card">
        <Heading margin="0 auto">{props.title}</Heading>
        <EmblaCarousel style={{ height: '300px' }}>
          {props.image && (
            <ImageComponent
              fileAsset={props.image}
              title={props.titleImage}
              // width="single-line-width"
            />
          )}
          <View UNSAFE_style={{ padding: '1em' }}>
            <Text>{props.description}</Text>
          </View>
          {/* <View>
          <div dangerouslySetInnerHTML={{ __html: props.body }} />
        </View> */}
        </EmblaCarousel>
      </Flex>
    </Link>
  );
};

export { Activity };
