import { faClockRotateLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import MainLayout from "./components/MainLayout/MainLayout";
import Sidenav from "./components/Sidenav/Sidenav";
import { useState } from "react";

function App() {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);
  const [list, setList] = useState([]);

  const navItems = [
    {
      id: 1,
      name: "Home",
      icon: faHouse,
      url: "/",
    },
    {
      id: 2,
      name: "History",
      icon: faClockRotateLeft,
      url: "/history",
    },
  ];

  return (
    <div className="flex flex-row justify-between gap-0 font-mainFont w-full">
      <Sidenav
        navItems={navItems}
        currentUrl={currentUrl}
        setCurrentUrl={setCurrentUrl}
        list={list}
        setList={setList}
      ></Sidenav>
      <MainLayout
        currentUrl={currentUrl}
        list={list}
        setList={setList}
        setCurrentUrl={setCurrentUrl}
      ></MainLayout>
    </div>
  );
}

export default App;
