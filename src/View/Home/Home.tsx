import { Divider } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import Categories from './Categories';
import DiscoverProduct from './DiscoverProduct';
import styles from './Home.module.scss';
import * as HomeService from '../../Services/Home';

export const mockDiscover = [
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

const Home: FC = () => {
  useEffect(() => {
    getDiscoverProduct();
  }, []);

  const [discoverProduct, setDiscoverProduct] = useState<any>([]);

  const getDiscoverProduct = async () => {
    const response: Response = await HomeService.getFiveProduct();
    setDiscoverProduct(await response.json());
  };

  return (
    <>
      <DiscoverProduct products={mockDiscover} />
      <Divider />
      <div className={styles.categories}>
        <Categories />
      </div>
      <Divider />
    </>
  );
};

export default Home;
