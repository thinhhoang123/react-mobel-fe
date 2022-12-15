import { Divider } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import Categories from './Categories';
import DiscoverProduct from './DiscoverProduct';
import styles from './Home.module.scss';
import * as HomeService from '../../Services/Home';

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
      <DiscoverProduct products={discoverProduct} />
      <Divider />
      <div className={styles.categories}>
        <Categories />
      </div>
      <Divider />
    </>
  );
};

export default Home;
