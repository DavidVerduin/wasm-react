import './App.css';
import { useEffect, useRef, useState } from 'react';

import { WasmBoy } from 'wasmboy';
import Header from './components/header/header';
import { SaveService } from './services/save.service';
import Controller from './components/controller/controller';

function App() {
  
  const canvasRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isJowPadVisible, setIsJowPadVisible] = useState(false);

  const buttonClasses = ['play-button', isPlaying ? 'hidden' : ''].filter(elem => !!elem).join(' ');
  let game;

  useEffect(() => {
    window.addEventListener("visibilitychange", visChngF);
    // Calls visChngF when the window first loads
    visChngF();
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("visibilitychange", visChngF);
    };

    function visChngF(){
      if(isPlaying) {
        if (document.hidden) {
          console.log("hidden means user is gone");
          WasmBoy.isPlaying() && WasmBoy.pause();
        } else {
          console.log("visible means user is back");
          WasmBoy.isPaused() && WasmBoy.play();
        }
      }
    }
  });

  let lastActionState = {};

  const interval = setInterval(() => {
    if(isPlaying) {
      WasmBoy.setJoypadState(lastActionState);
    }
  }, 50/3);

  const actionStarted = action => {
    console.log('actionStarted', action);
    lastActionState = { [action]: true }
    //WasmBoy.setJoypadState({ [action]: true })
  }

  const actionEnded = action => {
    console.log('actionClicked', action);
    lastActionState = { [action]: false }
    //WasmBoy.setJoypadState({ [action]: false })
  }

  const startGame = async (event) => {
    console.log('start Game');
    const file = event.target.files[0]
    console.log(file);
    if(!file) return;
    setIsPlaying(true);
    await WasmBoy.config({}, canvasRef.current);
    await WasmBoy.loadROM(file, null);
    await WasmBoy.play();
  }

  const saveGame = async () => {
    const state = await WasmBoy.saveLoadedCartridge();
    SaveService.setSave(state);
    await WasmBoy.play();
  }

  const loadPreviousGame = async () => {
    const state = SaveService.getSave();
    if(state?.cartridgeRom?.ROM) {
      await WasmBoy.reset();
      await WasmBoy.loadROM(game?.cartridgeRom?.ROM);
      await WasmBoy.play();
    }
  }
  
  return (
    <div className="App">
      <Header saveGame={saveGame} loadPreviousGame={loadPreviousGame} toggleJoyPad={()=> setIsJowPadVisible(!isJowPadVisible)} isGameLoaded={isPlaying}></Header>
      <div className={buttonClasses}>
          <label htmlFor="game-rom">Subir ROM</label>
          <input type="file" className="game-rom-input" name="game-rom" id="game-rom" onChange={startGame}/>
      </div>
      <canvas className="gameboy-canvas" ref={canvasRef}></canvas>
      <Controller actionStarted={actionStarted} actionEnded={actionEnded} visible={isJowPadVisible}></Controller>
    </div>
  );
}

export default App;
