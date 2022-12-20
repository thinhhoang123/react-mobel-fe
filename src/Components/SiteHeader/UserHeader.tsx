import { Avatar, Link, Menu, MenuButton, MenuItem, MenuList, Wrap, WrapItem } from '@chakra-ui/react'
import  { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import styles from './SiteHeader.module.scss';

const menuItem = [
    {id: 1, text: 'Profile', path: '/'},
    {id: 2, text: 'Logout', path: '/'},
]
const UserHeader: FC = () => {
  return (
    <Menu>
        <MenuButton >
        <Wrap>
            <WrapItem>
                <Avatar size="xs" name="Thinh Hoang" />{' '}
            </WrapItem>
        </Wrap>
        </MenuButton>
        <MenuList minWidth='100px'>
            {menuItem.map(item => {
                return (
                    <MenuItem key={item.id}>
                        <Link as={RouterLink} to={item.path}>
                            {item.text}
                        </Link>
                    </MenuItem>
                )
            })}
        </MenuList>
    </Menu>
  )
}

export default UserHeader