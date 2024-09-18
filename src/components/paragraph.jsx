/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, Flex } from '@adobe/react-spectrum';
import { Link } from 'react-router-dom';

const alignments = { left: 'flex-start' };
const typeMarks = {
  underline: { textDecoration: 'underline' },
  bold: { fontWeight: 'bold' },
};
const styleFromMarks = (marks) => {
  let style = {};
  if (marks) {
    const styles = marks
      .filter((mark) => mark.type !== 'link')
      .map((mark) => typeMarks[mark.type]);
    styles.forEach((s) => {
      style = { ...s, ...style };
    });
  }
  return style;
};

const MaybeLink = (props) => {
  const links = props.marks?.filter((mark) => mark.type === 'link');
  if (!links?.length) {
    return <>{props.children}</>;
  }
  const link = links[0];
  return (
    <Link to={link.attrs.href} target={link.attrs.target} rel={link.attrs.rel}>
      {props.children}
    </Link>
  );
};

const MarkedText = ({ c }) => {
  return (
    <MaybeLink {...c}>
      <Text UNSAFE_style={styleFromMarks(c.marks)}>{c.text}&nbsp;</Text>
    </MaybeLink>
  );
};

const ParagraphComponent = (props) => {
  const align = alignments[props.attrs?.textAlign || 'start'];
  // console.log('ParagraphComponent', props, align);

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
        <MarkedText key={i} c={c} />
      ))}
    </Flex>
  ) : null;
};

export { ParagraphComponent, MarkedText };
