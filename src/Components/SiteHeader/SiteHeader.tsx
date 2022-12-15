import { FC } from 'react';
import { Container, HStack, Image } from '@chakra-ui/react';
import FootAir from './mobel.svg';
import styles from './SiteHeader.module.scss';
import SideHeaderMenuDrawer from './SideHeaderMenuDrawer';
import SideHeaderSearchDrawer from './SiteHeaderSearchDrawer';
// import { Router } from '../../AppRouter/AppRouter';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink,
} from 'react-router-dom';
const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Container maxW="8xl">
        <HStack spacing="24px" className={styles.siteHeaderContain}>
          {/* <Link to="/login"> */}
          <Image
            src={FootAir}
            alt="Foot Air logo"
            className={styles.footAirLogo}
          />
          {/* </Link> */}
          <div className={styles.desktopIconBth}>
            {/* <Link to="">Search</Link> */}
            <Link to="login">Account</Link>
            {/* <Link to="">Wish list</Link> */}
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

