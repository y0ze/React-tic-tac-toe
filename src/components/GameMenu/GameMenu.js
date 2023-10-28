import './GameMenu.css';
import { useState, useEffect } from 'react';
export default function GameMenu(props) {
  const { onGameStarted } = props;
  const [easySelected, setEasySelected] = useState(false);
  const [mediumSelected, setMediumSelected] = useState(false);
  const [hardSelected, setHardSelected] = useState(false);
  const [gameType, setGameType] = useState(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  function OnGameTypeSelected(gameType) {
    setGameType(gameType);
  }

  useEffect(() => {
    setEasySelected(false);
    setMediumSelected(false);
    setHardSelected(false);
    if (gameType === 'easy') {
      setEasySelected(true);
    } else if (gameType === 'medium') {
      setMediumSelected(true);
    } else if (gameType === 'hard') {
      setHardSelected(true);
    }
  }, [gameType]);

  
  return (
    <div class="startMenu">
      <div class="container">
          <div class="col-md-12 text-center">
            <h3 class="animate-character"> Game Select Menu</h3>
          </div>
          <p class="selectGameP">Select a game mode:</p>
          <div>
            <button onClick={ () => OnGameTypeSelected('easy') } className={`selectGameBtn ${easySelected ? 'pressed': ''}`} id="gameEasyBtn"><a>Small</a></button>
            <button onClick={ () => OnGameTypeSelected('medium') } className={`selectGameBtn ${mediumSelected ? 'pressed': ''}`} id="gameMediumBtn"><a>Medium</a></button>
            <button onClick={ () => OnGameTypeSelected('hard') } className={`selectGameBtn ${hardSelected ? 'pressed': ''}`} id="gameHardBtn"><a>Large</a></button>
          </div>
          <p class="playerNamesP">Enter Player Names:</p>
            <div class="col-3">
              <input 
                type="text" 
                class="effect-7" 
                id="player1-name" 
                placeholder="Player 1 with X"
                minlength="2" 
                value={player1Name} 
                onChange={(e) => setPlayer1Name(e.target.value)}
                ></input>
              <span class="focus-border"></span>
            </div>
            <div class="col-3">
              <input 
                type="text" 
                class="effect-7" 
                id="player2-name" 
                placeholder="Player 2 with O" 
                minlength="2"
                value={player2Name} 
                onChange={(e) => setPlayer2Name(e.target.value)}
              ></input>
              <span class="focus-border"></span>
            </div>
          </div>
      <button id="start-button" onClick={() => onGameStarted(gameType, player1Name, player2Name)}>Start Game</button>
    </div>
  );
}