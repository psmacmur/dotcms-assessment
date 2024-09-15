/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Image, Link } from '@adobe/react-spectrum';

const Activity = ({ title, description, image, urlTitle }) => {
  return (
    <article className="p-4 overflow-hidden bg-white rounded shadow-lg">
      Activity
      {image && (
        <Image
          src={image?.idPath ?? image}
          width={100}
          height={100}
          alt="Activity Image"
        />
      )}
      <div className="px-6 py-4">
        <p className="mb-2 text-xl font-bold">{title}</p>
        <p className="text-base line-clamp-3">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/activities/${urlTitle || '#'}`}>Link to detail →</Link>
      </div>
    </article>
  );
};

export { Activity };
