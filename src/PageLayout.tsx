import { Box, Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import SiteHeader from './Components/SiteHeader/SiteHeader';

const PageLayout: FC<any> = ({ children }) => {
  return (
    <Stack>
      <SiteHeader />
      <Container maxW="100vw" style={{ marginTop: '8rem' }}>
        {children}
      </Container>
      <h1>This.is footer</h1>
    </Stack>
  );
};

export default PageLayout;

