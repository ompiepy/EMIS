import React from 'react'
import { menuItems } from '@/utils/menuItems'
import NavBarMenuItems from './NavBarMenuItems'

const NavBar = () => {
  return (
    <ul>
        { menuItems.map((menu, index) => {
                const depthLevel = 0;
                return <NavBarMenuItems items={menu} key={index} depthLevel={depthLevel} />
            })
        }
    </ul>
  )
}

export default NavBar