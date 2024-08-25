import { useState } from "react";
import './header.css';
import ConfigMenu from "../config-menu/config-menu";


function Header({saveGame, loadPreviousGame, toggleJoyPad, isGameLoaded}) {

  const [isOpened, setIsOpened] = useState(false);

  const header = isGameLoaded ? 
  <header className="header">
    <div className='icon-container'><span onClick={toggleJoyPad} className="material-symbols-outlined">videogame_asset</span></div>
    <div className='icon-container'><span onClick={() =>saveGame()} className="material-symbols-outlined">save</span></div>
    <div className='icon-container'><span onClick={() =>loadPreviousGame()} className="material-symbols-outlined">cycle</span></div>
    <div className='icon-container'><span onClick={() =>setIsOpened(true)} className="material-symbols-outlined">menu</span></div>
  </header>
    : <header className="header"><div className='icon-container'><span onClick={() =>setIsOpened(true)} className="material-symbols-outlined">menu</span></div></header>;

  return (
    <div className="Header">
      {header}
      <ConfigMenu isOpened={isOpened} setIsOpened={setIsOpened} ></ConfigMenu>
    </div>
  );
}

export default Header;
