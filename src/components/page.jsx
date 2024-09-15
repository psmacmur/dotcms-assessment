/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { DotcmsLayout } from '@dotcms/react';
import { client } from '../utils/dotcmsClient';
import { componentsMap } from './componentsMap';
import { withExperiments } from '@dotcms/experiments';

const experimentConfig = {
  apiKey: null, // not working atm import.meta.env.VITE_PUBLIC_EXPERIMENTS_API_KEY, // API key for experiments, should be securely stored
  server: import.meta.env.VITE_PUBLIC_DOTCMS_HOST, // DotCMS server endpoint
  debug: import.meta.env.VITE_PUBLIC_EXPERIMENTS_DEBUG, // Debug mode for additional logging
};

const Page = ({ path }) => {
  const [pageContext, setPageContext] = useState(undefined);
  const getPage = async () => {
    setPageContext(await client.page.get({ depth: 3, path: path }));
    //   console.log(navData);
  };
  useEffect(() => {
    getPage();
  }, []);
  if (!pageContext) {
    return path;
  }

  console.log('Page', path, pageContext);

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
    <DotLayoutComponent
      pageContext={{
        components: componentsMap,
        pageAsset: pageContext,
        isInsideEditor: false,
      }}
      config={{ pathname: path }}
    />
  );
};

export { Page };
