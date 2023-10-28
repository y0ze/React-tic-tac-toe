import './Board.css';
import { useState, useEffect } from 'react';
import Cell from '../Cell/Cell';
export default function Board(props) {
  const { size, winLength} = props;
  const [ positions, setPositions ] = useState(Array.from({ length: size }, () => []));
  const [ turn, setTurn ] = useState('x');

  function onCellClicked(gridRow, gridCol) {
    // console.log(`click pe ${gridRow}: ${gridCol}`);
    positions[gridRow][gridCol] = turn;
    setPositions([...positions]);
    setTurn(turn === 'x' ? 'o' : 'x');
  }


  let cells = [];
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      cells.push(<Cell cellType = {positions[i][j]} onCellClicked={() => onCellClicked(i, j)}></Cell>)
    }
  }
  return (
    <div className="tic-container">
      <div id="grid-container">
        {cells}
      </div>
    </div>
  );
}
