import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import DiscoverProduct from '../Home/DiscoverProduct';
import { mockDiscover } from '../Home/Home';
import styles from './Shopping.module.scss';

function Shopping() {
  return (
    <div>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(auto-fit, minmax(20rem, 2fr))"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem rowSpan={2} colSpan={4} bg="tomato"></GridItem>
      </Grid>
    </div>
  );
}

export default Shopping;
