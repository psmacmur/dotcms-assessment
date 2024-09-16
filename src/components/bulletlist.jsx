/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import { BlogComponent } from './blogComponents';

// const alignments = { left: 'flex-start' };
const BulletListComponent = (props) => {
  console.log('BulletListComponent', props);
  return (
    <Flex
      direction="row"
      // justifyContent={alignments[props.attrs?.textAlign || 'flex-start']}
    >
      <ul>
        {props.content.map((c, i) => (
          <li key={i}>
            <BlogComponent contentItem={c} key={i} />
          </li>
        ))}
      </ul>
    </Flex>
  );
};

const ListItemComponent = (props) => {
  console.log('ListItemComponent', props);
  return (
    <Flex
      direction="row"
      // justifyContent={alignments[props.attrs?.textAlign || 'flex-start']}
    >
      {props.content.map((c, i) => (
        <BlogComponent contentItem={c} key={i} />
      ))}
    </Flex>
  );
};

export { BulletListComponent, ListItemComponent };
