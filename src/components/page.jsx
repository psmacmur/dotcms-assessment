/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { DotcmsLayout } from '@dotcms/react';
import { client } from '../utils/dotcmsClient';
import { componentsMap } from './componentsMap';

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
  // @ts-ignore
  return (
    <DotcmsLayout
      pageContext={{
        components: { Page: Page, ...componentsMap },
        pageAsset: pageContext,
        isInsideEditor: false,
      }}
      config={{ pathname: path }}
    />
  );
};

export { Page };
