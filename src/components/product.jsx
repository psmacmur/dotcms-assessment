/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Image, Link } from '@adobe/react-spectrum';
const Product = ({ image, title, salePrice, retailPrice, urlTitle }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="overflow-hidden bg-white rounded shadow-lg">
      <div className="p-4">
        {image && (
          <Image
            src={image?.idPath ?? image}
            width={100}
            height={100}
            alt="Activity Image"
          />
        )}
      </div>
      <div className="px-6 py-4 bg-slate-100">
        <div className="mb-2 text-xl font-bold line-clamp-1">{title}</div>
        {retailPrice && salePrice ? (
          <>
            <div className="text-gray-500 line-through">
              {formatPrice(retailPrice)}
            </div>
            <div className="text-3xl font-bold ">{formatPrice(salePrice)}</div>
          </>
        ) : (
          <>
            <div className="min-h-6" />
            <div className="text-3xl font-bold">
              {retailPrice ? formatPrice(retailPrice) : formatPrice(salePrice)}
            </div>
          </>
        )}
        <Link href={`/store/products/${urlTitle || '#'}`}>Buy Now</Link>
      </div>
    </div>
  );
};

export { Product };
