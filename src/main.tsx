import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './AppRouter/AppRouter';
import PageLayout from './PageLayout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ScrollToTop />
        <PageLayout></PageLayout>
      </ChakraProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

