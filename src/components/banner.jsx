/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Flex, Heading, View } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';
import { ImageComponent } from './image';

const Banner = (props) => {
  console.log('Banner', props);
  const navigate = useNavigate();

  return (
    <View UNSAFE_style={{ position: 'relative' }}>
      {props.image && (
        <>
          <ImageComponent
            fileAsset={props.image}
            title={props.titleImage}
            UNSAFE_style={{ position: 'absolute', top: 0 }}
          />
          <View
            UNSAFE_style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              opacity: '40%',
              backgroundColor: 'black',
            }}
          ></View>
        </>
      )}
      <Flex
        direction={'column'}
        UNSAFE_style={{
          position: 'absolute',
          top: '22%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Heading level={1} alignSelf="center">
          {props.title}
        </Heading>
        <Heading level={2} alignSelf="center">
          {props.caption}
        </Heading>
        <Button
          variant="cta"
          width={'single-line-width'}
          margin={'auto'}
          href="/store"
          onPress={() => navigate('/store')}
        >
          {props.buttonText}
        </Button>
      </Flex>
    </View>
  );
};

export { Banner };
