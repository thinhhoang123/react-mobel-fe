import { FC } from 'react';
import { Container, HStack, Image, Link } from '@chakra-ui/react';
import FootAir from './mobel.svg';
import styles from './SiteHeader.module.scss';
import SideHeaderMenuDrawer from './SideHeaderMenuDrawer';
import SideHeaderSearchDrawer from './SiteHeaderSearchDrawer';

import { Link as RouterLink } from 'react-router-dom';
import { Router } from '../../AppRouter/AppRouter';

const widgetHolder: IWidgetHolder[] = [
  { holder: 'Search', to: Router.Home() },
  { holder: 'Account', to: Router.LoginPage() },
  { holder: 'Wish list', to: Router.Home() },
];

const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Container maxW="8xl">
        <HStack spacing="24px" className={styles.siteHeaderContain}>
          <Link as={RouterLink} to={Router.Home()}>
            <Image
              src={FootAir}
              alt="Foot Air logo"
              className={styles.footAirLogo}
            />
          </Link>
          <div className={styles.desktopIconBth}>
            {widgetHolder.map((widget: IWidgetHolder) => {
              return (
                <Link as={RouterLink} to={widget.to}>
                  {widget.holder}
                </Link>
              );
            })}
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
  holder: string;
  to: string;
}

export default SiteHeader;

