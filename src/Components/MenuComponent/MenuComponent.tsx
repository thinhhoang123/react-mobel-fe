import { Link, MenuButton, MenuItem, MenuList, Menu } from '@chakra-ui/react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { Text } from '@chakra-ui/react';

const MenuComponent: FC<IMenuProps> = ({ menuBtn, menuList }) => (
  <Menu>
    <MenuButton as={Link}>
      {menuBtn} <FontAwesomeIcon icon={faAngleDown} />
    </MenuButton>
    <MenuList>
      {menuList.map((item, index) => {
        return (
          <Link
            as={item.path ? RouterLink : Text}
            to={item.path ? item.path : ''}
            key={index}
          >
            <MenuItem key={index}>{item.itemText}</MenuItem>
          </Link>
        );
      })}
    </MenuList>
  </Menu>
);

interface IMenuProps {
  menuBtn: string;
  menuList: IMenuList[];
}

interface IMenuList {
  itemText: string;
  path?: string;
}

export default MenuComponent;
