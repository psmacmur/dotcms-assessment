/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Button,
  Content,
  Flex,
  Heading,
  Text,
  View,
} from '@adobe/react-spectrum';
import { Link, useNavigate } from 'react-router-dom';
import { ImageComponent } from './image';

const ProductPromo = (props) => {
  const data = props.attrs?.data;
  const navigate = useNavigate();

  // console.log('ProductPromo', props);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // transform Image URL to something like https://demo.dotcms.com/dA/adf567f9-f8a9-487e-b942-6bc083f677db/370w/20q/
  const src = `${data.identifier}/370w/20q`;
  const url = `/store/${data.urlTitle}`;

  return (
    <Link to={data.urlMap} aria-description={data.urlTitle}>
      <View
        borderWidth="thin"
        borderColor="dark"
        borderRadius="small"
        margin="1em"
      >
        <Flex direction="row" alignItems="center">
          {data.image && (
            <View margin="8px" flexBasis="content">
              <ImageComponent
                fileAsset={src}
                title={
                  data.imageMetaData?.title ?? data.titleImage ?? data.title
                }
              />
            </View>
          )}
          <Flex
            direction="column"
            alignItems="center"
            flexBasis="auto"
            flexGrow={1}
          >
            <Heading alignSelf="center" margin={8}>
              {data.title}
            </Heading>
            <Content maxWidth="500px" margin="4px">
              {data.description && (
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              )}
            </Content>
          </Flex>

          <Flex direction="column" alignItems="center" flexBasis="content">
            <Text
              UNSAFE_style={{
                textDecoration: data.salePrice ? 'line-through' : 'none',
                fontWeight: data.salePrice ? 'normal' : 'bold',
                color: data.salePrice ? 'lightgray' : 'white',
              }}
            >
              {data.retailPrice && formatPrice(data.retailPrice)}
            </Text>
            <Text
              UNSAFE_style={{
                color: data.salePrice ? 'cornflowerblue' : 'white',
                fontWeight: 'bold',
              }}
            >
              {data.salePrice && formatPrice(data.salePrice)}
            </Text>
            <Button
              variant="cta"
              width={'single-line-width'}
              margin={'10px'}
              href="url"
              onPress={() => navigate(url, { replace: true })}
            >
              BUY
            </Button>
          </Flex>
        </Flex>
      </View>
    </Link>
  );
};

export { ProductPromo };
