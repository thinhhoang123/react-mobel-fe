import { Box, Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import AppRouter from './AppRouter/AppRouter';
import SiteHeader from './Components/SiteHeader/SiteHeader';
import { RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const PageLayout: FC<any> = ({ children }) => {
  return (
    <Stack>
      <SiteHeader />
      <Container maxW="100vw" style={{ marginTop: '8rem' }}>
        {/* <RouterProvider router={AppRouter} /> */}
        <AppRouter />
      </Container>
      <Footer />
    </Stack>
  );
};

export default PageLayout;

