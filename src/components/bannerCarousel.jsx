/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View } from '@adobe/react-spectrum';
import { EmblaCarousel } from './EmblaCarousel/EmblaCarousel';
import { Banner } from './banner';

const BannerCarousel = (props) => {
  const minHeight = 350;
  // console.log('BannerCarousel', minHeight, props);

  return (
    <View
      UNSAFE_style={{ position: 'relative', overflow: 'hidden' }}
      height={minHeight}
    >
      {props.banners?.length && (
        <EmblaCarousel
          height={minHeight}
          options={{ enableControls: true, showButtons: true }}
        >
          {props.banners.map((banner, i) => {
            const bannerProps = {
              height: `${minHeight}px`,
              ...banner,
            };
            return <Banner key={i} {...bannerProps}></Banner>;
          })}
        </EmblaCarousel>
      )}
      {/* <Flex
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
      </Flex> */}
    </View>
  );
};

export { BannerCarousel };
