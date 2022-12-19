import { FC } from 'react';
import {
  Avatar,
  Container,
  HStack,
  Image,
  Link,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import FootAir from './mobel.svg';
import styles from './SiteHeader.module.scss';
import SideHeaderMenuDrawer from './SideHeaderMenuDrawer';
import SideHeaderSearchDrawer from './SiteHeaderSearchDrawer';

import { Link as RouterLink } from 'react-router-dom';
import { Router } from '../../AppRouter/AppRouter';
import mobel from '../../Assets/img/mobel.svg';

const widgetHolder: IWidgetHolder[] = [
  { id: 1, holder: 'Search', to: Router.Home() },
  { id: 2, holder: 'Account', to: Router.LoginPage() },
  { id: 3, holder: 'Wish list', to: Router.WishList() },
];

const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Container maxW="8xl">
        <HStack spacing="24px" className={styles.siteHeaderContain}>
          <Link as={RouterLink} to={Router.Home()}>
            <Image
              src={mobel}
              alt="Foot Air logo"
              className={styles.footAirLogo}
            />
          </Link>
          <div className={styles.desktopIconBth}>
            {widgetHolder.map((widget: IWidgetHolder) => {
              return (
                <Link as={RouterLink} to={widget.to} key={widget.id}>
                  {widget.holder}
                </Link>
              );
            })}
            <Wrap>
              <WrapItem>
                <Avatar size="xs" name="Thinh Hoang" />{' '}
              </WrapItem>
            </Wrap>
          </div>
          <div className={styles.mobileIconBtn}>
            <SideHeaderSearchDrawer />
            <SideHeaderMenuDrawer />
          </div>
        </HStack>
      </Container>
    </header>
  );
};

interface IWidgetHolder {
  id: number;
  holder: string;
  to: string;
}

export default SiteHeader;

