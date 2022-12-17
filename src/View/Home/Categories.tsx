import { FC } from 'react';
import { Text, Image, CardBody, Card } from '@chakra-ui/react';
import styles from './Home.module.scss';

const mockCategories = [
  {
    id: 1,
    imgSrc:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-1-img-1.jpg',
    text: '01 CHAIRS',
  },
  {
    id: 2,
    imgSrc:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-02.jpg',
    text: '02 SOFAS',
  },
  {
    id: 3,
    imgSrc:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-03.jpg"',
    text: '03 PEDANTS',
  },
  {
    id: 4,
    imgSrc:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-04.jpg',
    text: '04 HOME DECOR',
  },
  {
    id: 5,
    imgSrc:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-05.jpg',
    text: '05 COFFEE TABLE',
  },
  {
    id: 6,
    imgSrc:
      'https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-06.jpg',
    text: '06 LAMPS',
  },
];

const Categories: FC = () => {
  return (
    <>
      <Text>SEARCH BY</Text>
      <Text fontSize="3xl" as="b">
        CATEGORIES
      </Text>
      <div className={styles.listCategories}>
        {mockCategories.map((category) => {
          return <CategoriesCard key={category.id} {...category} />;
        })}
      </div>
    </>
  );
};

const CategoriesCard: FC<ICategoriesCardProps> = ({ imgSrc, text }) => {
  return (
    <Card className={styles.categoriesCard}>
      <CardBody>
        <Image
          src={imgSrc}
          alt={text}
          borderRadius="lg"
          className={styles.imgCategory}
        />
        <Text mt="2">{text}</Text>
      </CardBody>
    </Card>
  );
};

interface ICategoriesCardProps {
  imgSrc?: string;
  text?: string;
}

export default Categories;

