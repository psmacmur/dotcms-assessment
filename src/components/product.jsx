/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex, Heading, Text } from '@adobe/react-spectrum';
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
      <Flex
        direction="column"
        alignItems="center"
        margin={12}
        UNSAFE_style={{
          border: '1px solid darkgray',
        }}
      >
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
          }}
        >
          {props.retailPrice && formatPrice(props.retailPrice)}
        </Text>
        <Text
          UNSAFE_style={{
            color: props.salePrice ? 'red' : 'white',
          }}
        >
          {props.salePrice && formatPrice(props.salePrice)}
        </Text>
      </Flex>
    </Link>
    // <div className="overflow-hidden bg-white rounded shadow-lg">
    //   <div className="p-4">
    //     {image && (
    //       <Image
    //         src={image?.idPath ?? image}
    //         width={100}
    //         height={100}
    //         alt="Activity Image"
    //       />
    //     )}
    //   </div>
    //   <div className="px-6 py-4 bg-slate-100">
    //     <div className="mb-2 text-xl font-bold line-clamp-1">{title}</div>
    //     {retailPrice && salePrice ? (
    //       <>
    //         <div className="text-gray-500 line-through">
    //           {formatPrice(retailPrice)}
    //         </div>
    //         <div className="text-3xl font-bold ">{formatPrice(salePrice)}</div>
    //       </>
    //     ) : (
    //       <>
    //         <div className="min-h-6" />
    //         <div className="text-3xl font-bold">
    //           {retailPrice ? formatPrice(retailPrice) : formatPrice(salePrice)}
    //         </div>
    //       </>
    //     )}
    //     <Link href={`/store/products/${urlTitle || '#'}`}>Buy Now</Link>
    //   </div>
    // </div>
  );
};

const ProductComponent = (props) => {
  return <Product {...(props.attrs?.data || props)} />;
};
export { Product, ProductComponent };
