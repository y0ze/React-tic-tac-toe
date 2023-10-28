import './Cell.css';
import { useState, useEffect } from 'react';
export default function Cell(props) {
  const { cellType, onCellClicked } = props;
  let image;

  if(cellType === 'x') {
    image = (
      <img src="img\xImg.png" alt="x"></img>
    )
  } else if(cellType ==='o') {
    image = (
      <img src="img\oImg.png" alt="o"></img>
    )
  }

  return (
    <div className="grid-item" onClick={onCellClicked}>
      {image}
    </div>
  );
}