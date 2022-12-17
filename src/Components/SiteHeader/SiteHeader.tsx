import { FC } from 'react';
import { Container, HStack, Image, Link } from '@chakra-ui/react';
import FootAir from './mobel.svg';
import styles from './SiteHeader.module.scss';
import SideHeaderMenuDrawer from './SideHeaderMenuDrawer';
import SideHeaderSearchDrawer from './SiteHeaderSearchDrawer';

import { Link as RouterLink } from 'react-router-dom';
const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Container maxW="8xl">
        <HStack spacing="24px" className={styles.siteHeaderContain}>
          <Link as={RouterLink} to="/">
            <Image
              src={FootAir}
              alt="Foot Air logo"
              className={styles.footAirLogo}
            />
          </Link>
          <div className={styles.desktopIconBth}>
            <Link as={RouterLink} to="">
              Search
            </Link>
            <Link as={RouterLink} to="login">
              Account
            </Link>
            <Link as={RouterLink} to="">
              Wish list
            </Link>
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

export default SiteHeader;

