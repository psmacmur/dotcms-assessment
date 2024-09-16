/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { client } from '../utils/dotcmsClient';
import { Content } from '@adobe/react-spectrum';
import { BlogComponent } from './blogComponents';

// register dynamic blog components
import { HeadingComponent } from './heading';
import { ParagraphComponent } from './paragraph';
import { BulletListComponent, ListItemComponent } from './bulletlist';
import { registerContentComponent } from './contentMap';
import { ImageComponent } from './image';

registerContentComponent('heading', HeadingComponent);
registerContentComponent('paragraph', ParagraphComponent);
registerContentComponent('bulletList', BulletListComponent);
registerContentComponent('listItem', ListItemComponent);
registerContentComponent('dotImage', ImageComponent);

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
    <Content maxWidth={1024} margin={'auto'}>
      {pageContext?.urlContentMap?.blogContent?.content?.map(
        (contentItem, i) => {
          return <BlogComponent key={i} contentItem={contentItem} />;
        }
      )}
    </Content>
  );
};

export { BlogPage };
