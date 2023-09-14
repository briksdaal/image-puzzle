import { useState } from 'react';
import Piece from './Piece';

export default function Grid({ gridArr, setGridArr, puzzleData }) {
  console.log(gridArr);
  const [dragged, setDragged] = useState(null);

  function handleDrag(e, id) {
    e.preventDefault();
    setDragged(id);
  }

  function handleDrop(e, id) {
    e.preventDefault();
    setGridArr((arr) =>
      [...arr].map((p) => {
        if (p === dragged) return id;
        if (p === id) return dragged;
        return p;
      })
    );
  }

  const dragAndDrop = {
    handleDrag,
    handleDrop
  };

  return (
    <div
      className="puzzle-grid"
      style={{
        display: 'grid',
        gap: '20px',
        height: puzzleData.image.height + 'px',
        width: puzzleData.image.width + 'px',
        gridTemplateRows: `repeat(${puzzleData.rows}, ${Math.floor(
          puzzleData.pieceHeight
        )}px)`,
        gridTemplateColumns: `repeat(${puzzleData.cols}, ${Math.floor(
          puzzleData.pieceWidth
        )}px)`
      }}>
      {gridArr.map((p) => (
        <Piece
          key={p}
          id={p}
          puzzleData={puzzleData}
          dragAndDrop={dragAndDrop}
        />
      ))}
    </div>
  );
}
