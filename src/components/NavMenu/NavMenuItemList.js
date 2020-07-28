import React from "react";
import NavMenuItem from "./NavMenuItem";

const MenuItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, itemKey) => {
        let props = { ...item, ...itemKey };
        return <NavMenuItem key={itemKey} {...props} />;
      })}
    </ul>
  );
};
export default MenuItemList;
