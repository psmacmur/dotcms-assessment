/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { client } from '../utils/dotcmsClient';
import {
  Content,
  Divider,
  Flex,
  Heading,
  Item,
  TagGroup,
  View,
} from '@adobe/react-spectrum';
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

  // grab the card's image as the header image
  const headerImageUrl = window.sessionStorage.getItem('heroImage');

  /**
   * DotcmsLayout doesn't seem to handle blog detail pages, so hand-roll one
   */
  const content = pageContext?.urlContentMap?.blogContent?.content || [];
  const title =
    pageContext?.urlContentMap?.title || pageContext?.page?.title || '';

  return (
    <Flex justifyContent="center">
      <View padding="size-250">
        <Content maxWidth="1024px">
          <Flex direction="column">
            {title && (
              <Heading level={2} alignSelf={'center'}>
                {title}
              </Heading>
            )}
            {headerImageUrl && (
              <Content
                maxHeight="size-5000"
                marginBottom="size-100"
                UNSAFE_style={{ overflow: 'hidden' }}
              >
                <ImageComponent
                  fileAsset={headerImageUrl}
                  title="Header image"
                />
              </Content>
            )}
            <TagGroup
              UNSAFE_style={{
                textTransform: 'uppercase',
                transform: 'translate(30px,-20px) skewX(-10deg)',
                fontWeight: 'bold',
              }}
            >
              <Item>
                <View backgroundColor="notice">
                  &nbsp;{pageContext?.urlContentMap?.tags}&nbsp;
                </View>
              </Item>
            </TagGroup>
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
