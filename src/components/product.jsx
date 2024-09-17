/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, Heading, Text, View } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';
import { ImageComponent } from './image';

const Product = (props) => {
  // const { image, title, salePrice, retailPrice, urlTitle } = props;
  console.log('Product', props);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  return (
    <Link to={props.urlMap} aria-description={props.urlTitle}>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="small"
        margin="1em"
      >
        <Flex direction="column" alignItems="center">
          {props.image && (
            <ImageComponent
              fileAsset={props.image}
              title={
                props.imageMetaData?.title ?? props.titleImage ?? props.title
              }
            />
          )}
          <Heading alignSelf="center" margin={8}>
            {props.title}
          </Heading>
          <Text
            UNSAFE_style={{
              textDecoration: props.salePrice ? 'line-through' : 'none',
              fontWeight: props.salePrice ? 'normal' : 'bold',
              color: props.salePrice ? 'lightgray' : 'white',
            }}
          >
            {props.retailPrice && formatPrice(props.retailPrice)}
          </Text>
          <Text
            UNSAFE_style={{
              color: props.salePrice ? 'cornflowerblue' : 'white',
              fontWeight: 'bold',
            }}
          >
            {props.salePrice && formatPrice(props.salePrice)}
          </Text>
        </Flex>
      </View>
    </Link>
  );
};

// const ProductComponent = (props) => {
//   return <Product {...(props.attrs?.data || props)} />;
// };
export { Product };
