import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ item, selectedNav, setSelectedNav, setCurrentUrl, currentUrl }) => {
  const isSelected = selectedNav.id === item.id;

  



  const changeNav = (item) => {
    setSelectedNav(item)
    setCurrentUrl(item.url)
    window.history.pushState(null, null, item.url)
  }
  return (
    <div
      className={`${
        isSelected ? "bg-[#1f1f1f]" : "bg-black"
      } rounded-md px-3 py-2 flex gap-4 items-center cursor-pointer`}
      onClick={() => changeNav(item)}
    >
      <FontAwesomeIcon icon={item.icon} size="sm" color="white" />
      <h4 className="text-base text-white ">{item.name}</h4>
    </div>
  );
};

export default NavItem;
