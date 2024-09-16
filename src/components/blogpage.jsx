/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { client } from '../utils/dotcmsClient';
import { Content, View } from '@adobe/react-spectrum';
import { contentMap } from './contentMap';
/**
 * Component to render when there is no component for the content type.
 *
 * @param {{ readonly contentType: string }} { contentType }
 * @return {*}
 */
const NoComponent = ({ contentType }) => {
  return <div data-testid="no-component">No Component for {contentType}</div>;
};

const BlogPage = ({ path }) => {
  const [pageContext, setPageContext] = useState(undefined);

  const getPage = async () => {
    console.log('BlogPage: getPage', path);
    const pageData = await client.page.get({ depth: 2, path: path });
    setPageContext(pageData);
    console.log(pageData);
  };

  useEffect(() => {
    getPage();
  }, []);

  console.log('BlogPage', path, pageContext);

  /**
   * DotcmsLayout doesn't seem to handle blog detail pages, so hand-roll one
   */
  return (
    <Content>
      {pageContext?.urlContentMap?.blogContent?.content?.map(
        (contentItem, i) => {
          const component = contentMap[contentItem.type];
          console.log(contentItem.type);
          if (component) {
            return <View key={i}>{component(contentItem)}</View>;
          }
          return <NoComponent key={i} contentType={contentItem.type} />;
        }
      )}
    </Content>
  );
};

export { BlogPage };
