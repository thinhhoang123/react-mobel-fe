import { FC } from 'react';
import {
  Avatar,
  Container,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link
} from '@chakra-ui/react';
import styles from './SiteHeader.module.scss';
import SideHeaderMenuDrawer from './SideHeaderMenuDrawer';
import SideHeaderSearchDrawer from './SiteHeaderSearchDrawer';
import { Link as RouterLink } from 'react-router-dom';
import { Router } from '../../AppRouter/AppRouter';
import mobel from '../../Assets/img/mobel.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';

export const widgetHolder: IWidgetHolder[] = [
  { id: 2, holder: 'Account', to: Router.LoginPage() },
  { id: 3, holder: 'Wish list', to: Router.WishList() },
];

export const SearchInput =() => (
  <div>
    <InputGroup className={styles.inputSearch}>
      <InputLeftElement
        pointerEvents='none'
        children={<FontAwesomeIcon icon={faSearch} />}
      />
      <Input type='tel' placeholder='Searching 👀 ...' focusBorderColor='teal.400'/>
    </InputGroup>
  </div>
)

const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <Container maxW="8xl">
        <HStack spacing="24px" className={styles.siteHeaderContain}>
          <Link as={RouterLink} to={Router.Home()}>
            <Image
              src={mobel}
              alt="Mobel logo"
              className={styles.footAirLogo}
            />
          </Link>
          <div className={styles.desktopIconBth}>
            <SearchInput/>
            {widgetHolder.map((widget: IWidgetHolder) => {
              return (
                <Link as={RouterLink} to={widget.to} key={widget.id}>
                  {widget.holder}
                </Link>
              );
            })}
          <UserHeader/>
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

export interface IWidgetHolder {
  id: number;
  holder: string;
  to: string;
}

export default SiteHeader;

