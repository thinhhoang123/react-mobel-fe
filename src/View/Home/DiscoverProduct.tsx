import { FC } from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import { Text, Divider } from '@chakra-ui/react';

import ListCardItem from '../../Components/ListCardItems/ListCardItems';
const DiscoverProduct: FC<any> = ({ products }) => {
  return (
    <>
      <Text>FEATURED</Text>
      <Text fontSize="3xl" as="b">
        DISCOVER PRODUCTS
      </Text>
      <ListCardItem>
        {products.map((product: any) => {
          return (
            <CardItem
              key={product._id}
              price={product.price}
              imgURL={product.imgURL}
              description={product.description}
            />
          );
        })}
      </ListCardItem>
    </>
  );
};

export default DiscoverProduct;
