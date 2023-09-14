import { useState } from 'react';
import Grid from './Grid';
import AvailablePieces from './AvailablePieces';
import shuffledArr from './helpers/shuffledArr';

export default function Puzzler({ image, width, height, rows, cols }) {
  const pieceWidth = width / cols;
  const pieceHeight = height / rows;
  const piecesArr = [];
  let idx = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const piece = {
        id: idx++,
        x: j,
        y: i,
        xOffset: -1 * (pieceWidth * j),
        yOffset: -1 * (pieceHeight * i)
      };
      piecesArr.push(piece);
    }
  }

  const [gridArr, setGridArr] = useState(
    piecesArr.map((p) => ({ id: p.id, piece: null }))
  );
  const [availableArr, setAvailableArr] = useState(shuffledArr(rows * cols));
  const [selected, setSelected] = useState(null);

  console.log(selected);

  const puzzleData = {
    image: {
      src: image,
      width,
      height
    },
    rows,
    cols,
    array: piecesArr,
    pieceWidth,
    pieceHeight,
    setSelected
  };

  return (
    <>
      <Grid gridArr={gridArr} {...puzzleData} />
      <AvailablePieces availableArr={availableArr} puzzleData={puzzleData} />
    </>
  );
}
