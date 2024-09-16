/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, Flex } from '@adobe/react-spectrum';

const alignments = { left: 'flex-start' };
const ParagraphComponent = (props) => {
  const align = alignments[props.attrs?.textAlign || 'start'];
  console.log('ParagraphComponent', props, align);

  return props?.content ? (
    <Flex
      direction="row"
      justifyContent={align}
      alignContent={align}
      justifySelf={align}
      alignItems={align}
      alignSelf={align}
      marginBottom={12}
    >
      {props.content.map((c, i) => (
        <Text key={i}>{c.text}&nbsp;</Text>
      ))}
    </Flex>
  ) : null;
};

export { ParagraphComponent };
