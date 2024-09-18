/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { DotcmsLayout } from '@dotcms/react';
import { client } from '../utils/dotcmsClient';
import { componentsMap } from './componentsMap';
import { withExperiments } from '@dotcms/experiments';
import { useTitle } from '../hooks/useTitle';
import { LoadingSpinner } from './loadingSpinner';
import { Flex, View } from '@adobe/react-spectrum';

const experimentConfig = {
  apiKey: null, // not working atm import.meta.env.VITE_PUBLIC_EXPERIMENTS_API_KEY, // API key for experiments, should be securely stored
  // @ts-ignore
  server: import.meta.env.VITE_PUBLIC_DOTCMS_HOST, // DotCMS server endpoint
  // @ts-ignore
  debug: import.meta.env.VITE_PUBLIC_EXPERIMENTS_DEBUG, // Debug mode for additional logging
};

const Page = ({ path }) => {
  const [pageContext, setPageContext] = useState(undefined);
  const getPage = async () => {
    // console.log('Page getPage', path);
    setPageContext(await client.page.get({ depth: 3, path: path }));
    //   console.log(navData);
  };
  useEffect(() => {
    getPage();
  }, []);
  useTitle(pageContext?.page?.title);

  if (!pageContext) {
    return <LoadingSpinner />;
  }

  // console.log('Page', path, JSON.stringify(pageContext, null, 2));

  /**
   * If using experiments, `DotLayoutComponent` is `withExperiments(DotcmsLayout)`.
   * If not using experiments:
   * - Replace the below line with `const DotLayoutComponent = DotcmsLayout;`
   * - Remove DotExperimentsProvider from the return statement.
   */
  const DotLayoutComponent = experimentConfig.apiKey
    ? withExperiments(DotcmsLayout, {
        ...experimentConfig,
      })
    : DotcmsLayout;

  // @ts-ignore
  return (
    <Flex justifyContent="center">
      <View>
        <DotLayoutComponent
          pageContext={{
            components: componentsMap,
            pageAsset: pageContext,
            isInsideEditor: false,
          }}
          config={{ pathname: path, editor: { params: { depth: '3' } } }}
        />
      </View>
    </Flex>
  );
};

export { Page };
