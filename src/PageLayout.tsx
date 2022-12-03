import { Box, Container, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import SiteHeader from './Components/SiteHeader/SiteHeader';

const PageLayout: FC<any> = ({ children }) => {
  return (
    <Stack>
      <SiteHeader />
      <body>
        <Container maxW="100vw" marginTop="8em">
          {children}
        </Container>
      </body>
      <h1>This.is footer</h1>
    </Stack>
  );
};

export default PageLayout;

