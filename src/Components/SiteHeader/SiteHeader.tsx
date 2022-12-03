import { FC, useRef } from 'react';
import { Container, HStack, Image, useDisclosure } from '@chakra-ui/react';
import FootAir from './mobel.svg';
import styles from './SiteHeader.module.scss';
import SideHeaderMenuDrawer from './SideHeaderMenuDrawer';
import SideHeaderSearchDrawer from './SiteHeaderSearchDrawer';

const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Container maxW="8xl">
        <HStack spacing="24px" className={styles.siteHeaderContain}>
          <Image
            src={FootAir}
            alt="Foot Air logo"
            className={styles.footAirLogo}
          />
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
