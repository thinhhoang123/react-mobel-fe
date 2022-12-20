import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { SearchInput } from './SiteHeader';

const SideHeaderSearchDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FontAwesomeIcon icon={faSearch} onClick={onOpen} />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Searching 👌</DrawerHeader>
          <DrawerBody>
            <SearchInput/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface ISideHeaderMenuDrawerProps {}

export default SideHeaderSearchDrawer;
