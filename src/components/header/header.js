import { useState } from "react";
import './header.css';
import ConfigMenu from "../config-menu/config-menu";


function Header({saveGame, loadPreviousGame}) {

  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="Header">
      <header className="header">
        <div className='icon-container'><span onClick={() =>saveGame()} className="material-symbols-outlined">save</span></div>
        <div className='icon-container'><span onClick={() =>loadPreviousGame()} className="material-symbols-outlined">cycle</span></div>
        <div className='icon-container'><span onClick={() =>setIsOpened(true)} className="material-symbols-outlined">menu</span></div>
      </header>
      <ConfigMenu isOpened={isOpened} setIsOpened={setIsOpened} ></ConfigMenu>
    </div>
  );
}

export default Header;
