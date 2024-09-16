/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Heading, Flex } from '@adobe/react-spectrum';

const alignments = { left: 'flex-start' };
const HeadingComponent = (props) => {
  console.log('HeadingComponent', props);
  return (
    <Flex
      direction="row"
      // justifyContent={alignments[props.attrs?.textAlign || 'flex-start']}
    >
      {props.content.map((c, i) => (
        <Heading
          key={i}
          alignSelf={alignments[props.attrs?.textAlign || 'flex-start']}
        >
          {c.text}&nbsp;
        </Heading>
      ))}
    </Flex>
  );
};

export { HeadingComponent };
