import { FC } from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import { Text, Divider, Center, Stack } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import ListCardItem from '../../Components/ListCardItems/ListCardItems';
import Buttons from '../../Components/Button/Button';
const DiscoverProduct: FC<any> = ({ products }) => {
  return (
    <>
      <Text>FEATURED</Text>
      <Text fontSize="3xl" as="b">
        DISCOVER PRODUCTS
      </Text>
      <ListCardItem>
        {products.map((product: IProduct) => {
          return <CardItem key={product._id} {...product} />;
        })}
      </ListCardItem>

      <Divider />

      <Flex wrap="wrap" mb={20} mt={10}>
        <Center w="40em">
          <Text fontSize="4xl" as="b">
            Unique designs that will fit in with the rest of your furniture. We
            will help you personalize your home.
          </Text>
        </Center>
        <Spacer />
        <Center w="50em">
          <Stack>
            <Text fontSize="xl">
              Ipsum voluptate et non. Est velit et ex laboriosam dolor est inven
              tore quo numquam. Labore voluptas nihil molestiae sint delectus
              sint sequi volup tatem. Quia id omnis aliquid suscipit* recusandae
              similique. Vero natus sed animi reiciendis. Ipsum voluptate et
              non. Est velit et ex laboriosam dolor est inventore quo nquam.
              Labore voluptas nihil molestiae sint delectus sint sequi
              voluptatem. Quia id omnis aliquid suscipit recusandae similique.
              Vero natus sed animi reiciendis. Ipsum voluptate et non. Est velit
              et ex laboriosam dolor est inventore quo nquam omnis aliquid
              suscipit voluptas.
            </Text>
            <Buttons>View more</Buttons>
          </Stack>
        </Center>
      </Flex>
    </>
  );
};

export default DiscoverProduct;

interface IProduct {
  _id: string;
  price: number;
  imgURL: string;
  description: string;
}

