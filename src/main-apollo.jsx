// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  // @ts-ignore
  uri: `${import.meta.env.VITE_PUBLIC_DOTCMS_HOST}/api/v1/graphql`,
  // 'Content-Type': 'application/json',
  // Accept: '*/*',
  // 'Accept-Encoding': 'gzip, deflate, br',
  fetchOptions: {
    mode: 'no-cors',
  },
});

const authLink = setContext((_, { headers }) => {
  // @ts-ignore
  const token = import.meta.env.VITE_PUBLIC_DOTCMS_AUTH_TOKEN;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // Enable sending cookies over cross-origin requests
  credentials: 'include',
});

client
  .query({
    query: gql`
      query GetBlogs {
        BlogCollection {
          identifier
          live
          locked
          title
        }
      }
    `,
  })
  .then((result) => console.log(result));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
