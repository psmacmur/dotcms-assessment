// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Item, TabList, TabPanels, Tabs } from '@adobe/react-spectrum';
import { useEffect } from 'react';
import { client } from '../utils/dotcmsClient';
import { Page } from '../components/page';

const Root = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    const getPages = async () => {
      const navData = await client.nav.get({ depth: 3, path: '/' });
      const entities =
        navData?.entity?.children?.filter((child) => child) || [];
      setEntities(entities);
      console.log(entities);
    };
    getPages();
  }, []);

  if (!entities?.length) {
    return null;
  }
  return (
    <Tabs aria-label="Top Nav">
      <TabList>
        {entities?.map((child) => {
          // console.log('TabList child', JSON.stringify(child, null, 2));
          return <Item key={child.href}>{child.title}</Item>;
        })}
      </TabList>
      <TabPanels>
        {entities?.map((child) => {
          // console.log('TabPanels child', JSON.stringify(child, null, 2));
          return (
            <Item key={child.href}>
              <Page path={`${child.href}/index`} />
            </Item>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export { Root };
