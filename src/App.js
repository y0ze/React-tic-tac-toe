import './App.css';
import NavBar from './components/NavBar/NavBar';
import GameMenu from './components/GameMenu/GameMenu';
import Board from './components/Board/Board';
import { useState } from 'react';
const gameTypeConfig = {
  easy: {
    boardSize: 3,
    winLength: 3,
  },
  medium: {
    boardSize: 5,
    winLength: 3,
  },
  hard: {
    boardSize: 9,
    winLength: 5,
  }
}
function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [showBoard, setShowBoard] = useState(false);
  const [boardSize, setBoardSize] = useState(null);
  const [winLength, setWinLength] = useState(null);

  function StartGame(gameType, xPlayer, oPlayer) {
    setShowMenu(false);
    setShowBoard(true);
    setBoardSize(gameTypeConfig[gameType].boardSize);
    setWinLength(gameTypeConfig[gameType].winLength);
    console.log(xPlayer, oPlayer);
  }

  function RestartGame() {
    setShowBoard(false);
    setShowMenu(true);
  }

  return (
    <div className="App">
      <NavBar onGameRestarted = {RestartGame}/>
      {showMenu ? <GameMenu onGameStarted={StartGame} /> : null}
      {showBoard ? <Board size={boardSize} winLength={winLength}/> : null}
    </div>
  );
}

export default App;
