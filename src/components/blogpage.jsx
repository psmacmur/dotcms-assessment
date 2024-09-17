/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { client } from '../utils/dotcmsClient';
import { Content, Divider, Flex, View } from '@adobe/react-spectrum';
import { BlogComponent } from './blogComponents';

// register dynamic blog components
import { HeadingComponent } from './heading';
import { ParagraphComponent } from './paragraph';
import { BulletListComponent, ListItemComponent } from './bulletlist';
import { registerContentComponent } from './contentMap';
import { ImageComponent } from './image';
import { useTitle } from '../hooks/useTitle';
import { TableComponent } from './table';
import { ProductPromo } from './promo';

registerContentComponent('heading', HeadingComponent);
registerContentComponent('paragraph', ParagraphComponent);
registerContentComponent('bulletList', BulletListComponent);
registerContentComponent('listItem', ListItemComponent);
registerContentComponent('dotImage', ImageComponent);
registerContentComponent('table', TableComponent);
registerContentComponent('dotContent', ProductPromo);

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

  useTitle(pageContext?.page?.title);

  console.log('BlogPage', path, pageContext);

  /**
   * DotcmsLayout doesn't seem to handle blog detail pages, so hand-roll one
   */
  const content = pageContext?.urlContentMap?.blogContent?.content || [];

  return (
    <Flex justifyContent="center">
      <View padding="size-250">
        <Content maxWidth="1024px">
          <Flex direction="column">
            {content.map((contentItem, i) => {
              return <BlogComponent key={i} contentItem={contentItem} />;
            })}
          </Flex>
        </Content>
      </View>
    </Flex>
  );
};

export { BlogPage };
