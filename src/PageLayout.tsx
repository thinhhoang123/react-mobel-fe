import { Box, Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import AppRouter from './AppRouter/AppRouter';
import SiteHeader from './Components/SiteHeader/SiteHeader';
import { RouterProvider } from 'react-router-dom';

const PageLayout: FC<any> = ({ children }) => {
  return (
    <Stack>
      <SiteHeader />
      <Container maxW="100vw" style={{ marginTop: '8rem' }}>
        {/* <RouterProvider router={AppRouter} /> */}
        <AppRouter />
      </Container>
      <h1>This.is footer</h1>
    </Stack>
  );
};

export default PageLayout;

