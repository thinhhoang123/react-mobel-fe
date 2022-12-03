import { Divider } from '@chakra-ui/react';
import { FC } from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import Categories from './Categories';
import DiscoverProduct from './DiscoverProduct';
import styles from './Home.module.scss';
const Home: FC = () => {
  return (
    <>
      <DiscoverProduct />
      <Divider />
      <div className={styles.categories}>
        <Categories />
      </div>
    </>
  );
};

export default Home;
