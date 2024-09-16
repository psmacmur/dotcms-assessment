/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, Flex } from '@adobe/react-spectrum';

const alignments = { left: 'flex-start' };
const BulletListComponent = (props) => {
  console.log('BulletListComponent', props);
  return (
    <Flex
      direction="row"
      // justifyContent={alignments[props.attrs?.textAlign || 'flex-start']}
    >
      {props.content.map((c, i) => (
        <Text
          key={i}
          alignSelf={alignments[props.attrs?.textAlign || 'flex-start']}
          // UNSAFE_style={c.}
        >
          {c.text}&nbsp;
        </Text>
      ))}
    </Flex>
  );
};

export { BulletListComponent };
