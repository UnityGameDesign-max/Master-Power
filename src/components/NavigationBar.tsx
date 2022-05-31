import React, { FC } from 'react'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const NavigationBar: FC = () => {
  return (
    <nav className="menuBar">
      <Menu mode="horizontal">
        <Menu.Item>
          <a href="">Main Page</a>
        </Menu.Item>
        <Menu.Item>
          <a href="">Settings</a>
        </Menu.Item>
      </Menu>
    </nav>
  )
};