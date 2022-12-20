import { Box, HStack, Image, StackDivider, VStack, Text, Container, Stack, Button, Tooltip } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react'
import { useAppSelector } from '../../hook'
import styles from './WishList.module.scss'
import { faCartShopping, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

const mockDiscover = [
  {
    _id: '6390cc11ae8e149285fae04e',
    title: '',
    description: 'Poliframe tuffed accnet chair 29.1″W, jet black',
    price: 258,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-1-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390cd58ae8e149285fae058',
    title: '',
    description: 'Sauder Boulevard Cafe Lounge Chair, Camel finish',
    price: 168,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-2-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390cd87ae8e149285fae05c',
    title: '',
    description: 'Ella Chair With Armrests, Solid Birch and Leather Cushion',
    price: 358,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-6-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390cda2ae8e149285fae05e',
    title: '',
    description: 'Stockholm Minimal Chair, Oak Wood with Fine finish',
    price: 237,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-7-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390cdbfae8e149285fae060',
    title: '',
    description: 'Rattan Spider work Armchair, matte lacque & steel legs',
    price: 490,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-29-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390cdd9ae8e149285fae062',
    title: '',
    description: 'Singapore Dark Rattan Handmade Armchair',
    price: 490,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-28-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390ce5dae8e149285fae06e',
    title: '',
    description: 'Mangata Pendant Lamp, dark grey 9″ Steel & powder coating',
    price: 120,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-17-img-1.jpg',
    __v: 0,
  },
  {
    _id: '6390ce8aae8e149285fae072',
    title: '',
    description: 'Haydes Handmade Floor Wooden Lamp, Matte natural finish',
    price: 208,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/hover-lamp-02.jpg',
    __v: 0,
  },
  {
    _id: '639d1c5a82ce632a9e512ba2',
    title: '',
    description:
      'Normani Designers Piece Chair, Dark Charcoal Satin cotton cushion',
    price: 550,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-9-img-1.jpg',
  },
  {
    _id: '639d1d5982ce632a9e512ba5',
    title: '',
    description: 'Morgon Table Lamp, Oak Wood natural matte finish',
    price: 250,
    imgURL:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-21-img-1.jpg',
  },
];

const WishList: FC = () => {
  const wishListItem = useAppSelector((state: any) => state.wishList.value);

  console.log(wishListItem)
  return (
    <div className={styles.wishList}>
      <Text fontSize="3xl" as="b" align="center">
        WISH LIST 💝
      </Text>
      <div className={styles.listWishLish}>
        {mockDiscover.map((item) => {
          return (
            <Box p={5} borderWidth='1px' key={item._id} className={styles.cardItem} borderRadius='lg'>
              <WishListHeart/>
              <HStack spacing='24px'>
                <Image src={item.imgURL} boxSize='120px' className={styles.itemCard}/>
                <Stack>
                  <Text>
                    {item.description}
                  </Text>
                    <Text>
                      {item.price} $
                    </Text>
                </Stack>
              </HStack>
            </Box>
          )
        })}
      </div>
    </div>
  )
}


const WishListHeart = () => {
  
  return (
    <div className={styles.WishListHeartHead}>
      <Tooltip label='Buy this 🛒' bgGradient="linear(to-r, teal.400,blue.400)" color='white'>
        <span className={styles.wishListCart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </Tooltip>
      <Tooltip label='Remove this item' bgGradient="linear(to-r, teal.400,blue.400)" color='white'>
        <span className={styles.wishListHeart}>
          <FontAwesomeIcon icon={faHeartSolid} />
        </span>
      </Tooltip>
    </div>
  )
}

export default WishList