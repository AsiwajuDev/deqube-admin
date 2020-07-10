import React from "react";

import logo from "../../../assets/images/logo.png";

import { menuItems, items } from "../../../constants/constants";
import MenuItemList from "../../../components/NavMenu/NavMenuItemList";
import SideMenu from "./SideMenu";

const NavBar = () => {
  return (
    <nav className="side-nav">
      <a href="#" className="intro-x flex items-center pl-5 pt-4">
        <img alt="DeQube Logo" src={logo} className="w-25" />
      </a>
      <div className="side-nav__devider my-6 border-t-2"></div>
      <MenuItemList items={menuItems} />
      {/* <SideMenu items={items} /> */}
      {/* <SideMenu /> */}
    </nav>
  );
};

export default NavBar;