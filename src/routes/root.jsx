// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Item, TabList, TabPanels, Tabs, View } from '@adobe/react-spectrum';
import { useEffect } from 'react';
import { client } from '../utils/dotcmsClient';
import { Outlet, useLocation } from 'react-router-dom';
import { splitUrlPath } from '../utils/url';

const Root = () => {
  const { pathname } = useLocation();
  console.log('Root', pathname);
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    const getPages = async () => {
      const navData = await client.nav.get({ depth: 3, path: '/' });
      const entities =
        // @ts-ignore
        navData?.entity?.children?.filter((child) => child) || [];
      setEntities([
        { href: '/index', title: 'Home', type: 'folder', order: -1 },
        ...entities,
      ]);
      console.log('Root getPages', entities);
    };
    getPages();
  }, []);
  if (!entities?.length) {
    return null;
  }
  const segments = splitUrlPath(pathname);

  return (
    <Tabs aria-label="Top Nav" selectedKey={`/${segments[0]}`} width="100%">
      <View
        position="fixed"
        top="0"
        zIndex={1}
        width="100%"
        UNSAFE_style={{ backgroundColor: 'rgb(29,29,29)' }}
      >
        <TabList>
          {entities?.map((child) => {
            return (
              <Item key={child.href} href={child.href}>
                {child.title}
              </Item>
            );
          })}
        </TabList>
      </View>
      <View position="relative" top="48px" width="100%">
        <TabPanels>
          {entities?.map((child) => {
            return (
              <Item key={child.href}>
                <View width="100%">
                  <Outlet context={`${child.href}`} />
                </View>
              </Item>
            );
          })}
        </TabPanels>
      </View>
    </Tabs>
  );
};

export { Root };
