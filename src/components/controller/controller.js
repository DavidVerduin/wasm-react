import './controller.css';


function Controller({actionStarted, actionEnded, visible}) {
  const controllerVisibility = ['Controller', visible ? '' : 'hidden'].join(' ');
  return (
    <div className={controllerVisibility}>
      <span id='controller-button_START' className="controller-button icon" onMouseDown={() => actionStarted('START')} onMouseUp={() => actionEnded('START')}>START</span>
      <span id='controller-button_SELECT' className="controller-button icon" onMouseDown={() => actionStarted('SELECT')} onMouseUp={() => actionEnded('SELECT')}>SELECT</span>
      <span id='controller-button_A' className="controller-button icon" onMouseDown={() => actionStarted('A')} onMouseUp={() => actionEnded('A')}>A</span>
      <span id='controller-button_B' className="controller-button icon" onMouseDown={() => actionStarted('B')} onMouseUp={() => actionEnded('B')}>B</span>
      <span id='controller-button_arrow_drop_up' className="controller-button material-symbols-outlined" onMouseDown={() => actionStarted('UP')} onMouseUp={() => actionEnded('UP')}>arrow_drop_up</span>
      <span id='controller-button_arrow_left' className="controller-button material-symbols-outlined" onMouseDown={() => actionStarted('LEFT')} onMouseUp={() => actionEnded('LEFT')}>arrow_left</span>
      <span id='controller-button_arrow_drop_down' className="controller-button material-symbols-outlined" onMouseDown={() => actionStarted('DOWN')} onMouseUp={() => actionEnded('DOWN')}>arrow_drop_down</span>
      <span id='controller-button_arrow_right' className="controller-button material-symbols-outlined" onMouseDown={() => actionStarted('RIGHT')} onMouseUp={() => actionEnded('arrow_right')}>arrow_right</span>
    </div>
  );
}

export default Controller;
