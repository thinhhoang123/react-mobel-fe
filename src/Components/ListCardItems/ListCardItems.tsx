import { Flex } from '@chakra-ui/react';
import { FC } from 'react';
import styles from './ListCardItems.module.scss';

const ListCardItem: FC<IListCardItemProps> = ({ children }) => {
  return <div className={styles.ListCardItem}>{children}</div>;
};

interface IListCardItemProps {
  children?: JSX.Element[];
}

export default ListCardItem;
