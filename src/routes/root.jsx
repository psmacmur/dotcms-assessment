// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Item, TabList, TabPanels, Tabs } from '@adobe/react-spectrum';
import { useEffect } from 'react';
import { client } from '../utils/dotcmsClient';
import { Outlet, useLocation } from 'react-router-dom';

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
      setEntities(entities);
      console.log('getPages', entities);
    };
    getPages();
  }, []);
  if (!entities?.length) {
    return null;
  }
  return (
    <Tabs aria-label="Top Nav" selectedKey={pathname} defaultSelectedKey="blog">
      <TabList>
        {entities?.map((child) => {
          // console.log('TabList child', JSON.stringify(child, null, 2));
          return (
            <Item key={child.href} href={child.href}>
              {child.title}
            </Item>
          );
        })}
      </TabList>
      <TabPanels>
        {entities?.map((child) => {
          // console.log('TabPanels child', JSON.stringify(child, null, 2));
          return (
            <Item key={child.href}>
              <Outlet context={`${child.href}`} />
            </Item>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export { Root };
