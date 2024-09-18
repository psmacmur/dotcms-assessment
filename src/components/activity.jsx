/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Heading, Flex, Text, View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import { ImageComponent } from './image';
import { EmblaCarousel } from './EmblaCarousel/EmblaCarousel';

const Activity = (props) => {
  // console.log('Activity', props);

  return (
    <Link to={props.urlMap} aria-description={props.urlTitle}>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="small"
        margin="1em"
      >
        <Flex direction="column">
          <Heading margin="8px auto">{props.title}</Heading>
          <EmblaCarousel>
            {props.image && (
              <ImageComponent
                fileAsset={props.image}
                title={props.titleImage}
              />
            )}
            <View UNSAFE_style={{ padding: '1em' }}>
              <Text>{props.description}</Text>
            </View>
            {/* TODO: move the following into a popup or child page 
            <View>
              <div dangerouslySetInnerHTML={{ __html: props.body }} />
            </View> */}
          </EmblaCarousel>
        </Flex>
      </View>
    </Link>
  );
};

export { Activity };
