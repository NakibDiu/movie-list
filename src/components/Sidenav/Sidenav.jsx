import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import NavItem from "./NavItem";

const Sidenav = ({ navItems, setCurrentUrl, currentUrl, list, setList }) => {
  const [selectedNav, setSelectedNav] = useState(navItems[0]);

  useEffect(() => {
    if (currentUrl === '/') {
      setSelectedNav(navItems[0])
    } else if (currentUrl === '/history') {
      setSelectedNav(navItems[1])
    } else {
      setSelectedNav("")
    }
  }, [])

  return (
    <div id="nav" className="px-2 lg:px-14 py-6 bg-black fixed left-0 h-screen w-[40%] lg:w-[25%] overflow-y-auto">
      <div className="border-b border-solid border-[#282828] pb-5 space-y-5">
        <div className="space-y-5">
          <h1 className="font-extrabold text-xl md:text-[40px] leading-[44px] text-center text-[#F33F3F] font-logo">
            Watchlists
          </h1>
          <input
            type="text"
            placeholder="search"
            className="border border-solid border-[#282828] bg-black text-base px-2 lg:px-3 py-2 rounded-md w-full"
          />
        </div>
        <div className="space-y-5">
          {navItems.map((item) => (
            <NavItem item={item} key={item.id} selectedNav={selectedNav} setSelectedNav={setSelectedNav} setCurrentUrl={setCurrentUrl} currentUrl={currentUrl}/>
          ))}
        </div>
      </div>
      <MovieList list={list} setList={setList} ></MovieList>
    </div>
  );
};

export default Sidenav;
