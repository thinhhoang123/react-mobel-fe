import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
import PageLayout from './PageLayout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PageLayout>
        <RouterProvider router={AppRouter} />
      </PageLayout>
    </ChakraProvider>
  </React.StrictMode>
);

