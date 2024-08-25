import './config-menu.css';

function ConfigMenu({isOpened, setIsOpened}) {

  const menuClass = ['ConfigMenu', isOpened ? '' : 'hidden'].join(' ')
  return (
    <div className={menuClass}>
      <header className="header">
        <div className='icon-container'><span onClick={() =>setIsOpened(false)} className="material-symbols-outlined">close</span></div>
      </header>
      <div className="config-menu">
        
      </div>
    </div>
  );
}

export default ConfigMenu;
