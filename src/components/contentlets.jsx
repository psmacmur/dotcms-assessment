/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { client } from '../utils/dotcmsClient';
import { componentsMap } from './componentsMap';
import { useTitle } from '../hooks/useTitle';
import { LoadingSpinner } from './loadingSpinner';
import { Flex, View } from '@adobe/react-spectrum';
import { useLocation } from 'react-router-dom';
import { DotcmsLayout } from '@dotcms/react';

const ContentletsPage = (props) => {
  const { pathname } = useLocation();
  const [pageContext, setPageContext] = useState(undefined);
  const getPage = async () => {
    console.log('ContentletsPage getPage', pathname);
    setPageContext(await client.page.get({ depth: 3, path: pathname }));
    //   console.log(navData);
  };
  useEffect(() => {
    getPage();
  }, []);
  useTitle(pageContext?.page?.title);

  if (!pageContext) {
    return <LoadingSpinner />;
  }

  console.log(
    'ContentletsPage',
    pathname,
    props,
    JSON.stringify(pageContext, null, 2)
  );

  // @ts-ignore
  return (
    <Flex justifyContent="center">
      <View>
        <DotcmsLayout
          pageContext={{
            components: componentsMap,
            pageAsset: pageContext,
            isInsideEditor: false,
          }}
          config={{ pathname: pathname, editor: { params: { depth: '3' } } }}
        />
      </View>
    </Flex>
  );
};

export { ContentletsPage };
