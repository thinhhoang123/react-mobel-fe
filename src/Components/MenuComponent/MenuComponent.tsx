import { Link, MenuButton, MenuItem, MenuList, Menu } from "@chakra-ui/react"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link as RouterLink } from 'react-router-dom';
import { FC } from "react"

const MenuComponent: FC<IMenuProps> = ({menuBtn, menuList}) => (
    <Menu>
        <MenuButton as={Link}>
            {menuBtn} <FontAwesomeIcon icon={faAngleDown} />
        </MenuButton>
        <MenuList>
            {menuList.map((item, index) => {
                return (
                <MenuItem key={index}>
                    { item.path ? 
                        <Link as={RouterLink} to={item.path}>{item.itemText}</Link> : 
                        <Link>{item.itemText}</Link> }
                </MenuItem>)
            })}
        </MenuList>
    </Menu>
)

interface IMenuProps {
    menuBtn: string;
    menuList: IMenuList[]
}

interface IMenuList {
    itemText: string;
    path?: string;
}


export default MenuComponent