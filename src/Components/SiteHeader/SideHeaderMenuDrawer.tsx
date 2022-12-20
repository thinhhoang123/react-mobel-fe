import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Router } from '../../AppRouter/AppRouter';
import { IWidgetHolder, widgetHolder } from './SiteHeader';
import { Link as RouterLink } from 'react-router-dom';
import mobel from '../../Assets/img/mobel.svg';
import styles from './SiteHeader.module.scss';

const SideHeaderMenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FontAwesomeIcon icon={faBars} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <Link as={RouterLink} to={Router.Home()}>
            <Image
              src={mobel}
              alt="Mobel logo"
              className={styles.mobelLogoMobile}
            />
          </Link>
          </DrawerHeader>
          <DrawerBody>
            <Stack>

            {widgetHolder.map((widget: IWidgetHolder) => {
              return (
                <Link as={RouterLink} to={widget.to} key={widget.id}>
                  👉 {widget.holder}
                </Link>
              );
            })}

            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface ISideHeaderMenuDrawerProps {}

export default SideHeaderMenuDrawer;
