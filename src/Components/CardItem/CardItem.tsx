import {
  Card,
  CardBody,
  Image,
  Text,
  CardFooter,
  HStack,
  Flex,
  Link,
} from '@chakra-ui/react';
import { FC } from 'react';
import styles from './CardItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../hook';
import { addWishList } from '../../Features/wishListSlice';


const CardItem: FC<any> = ({ imgURL, price, description }) => {
  const dispart = useAppDispatch();
  const handleAddWishList = () => {
    dispart(addWishList())
  }
  return(
  <>
    <Card maxW="md" className={styles.cartItem}>
      <CardBody>
        <div className={styles.imgContain}>
          <Image
            src={imgURL}
            alt={description}
            borderRadius="lg"
            className={styles.imgProduct}
          />
          <div className={styles.imgInfo}>
            <div className={[styles.infoBtn, styles.infoQuickView].join(' ')}>
              Quick view
            </div>
            <div className={styles.infoBtn} onClick={handleAddWishList}>
              <Link> Add wishlist </Link>
              </div>
          </div>
        </div>

        <Flex mt="6" justifyContent="space-between">
          <Text>{description}</Text>
          <Text>{price}$</Text>
        </Flex>
      </CardBody>

      <CardFooter className={styles.cardItemFooter}>
        <div className={styles.addToCartBtn}>
          <Text as="b">ADD TO CART</Text>
        </div>
      </CardFooter>
    </Card>
  </>
)};

export default CardItem;

