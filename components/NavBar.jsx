import React from 'react'
import { menuItems } from '@/utils/menuItems'
import NavBarMenuItems from './NavBarMenuItems'

const NavBar = () => {
    const depthLevel = 0;
  return (
    <nav>
        <ul className="menus">
            { menuItems.map((menu, index) => {
                    return (
                        <NavBarMenuItems items={menu} key={index} depthLevel={depthLevel}/>);
                })
            }
        </ul>   
    </nav>
  )
}

export default NavBar