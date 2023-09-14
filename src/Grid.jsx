import { useState } from 'react';
import Piece from './Piece';

export default function Grid({ gridArr, image, array, rows, cols }) {
  return (
    <div
      className="puzzle-grid"
      style={{
        display: 'grid',
        height: image.height + 'px',
        width: image.width + 'px',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`
      }}>
      {gridArr.map((p) => (
        <Piece />
      ))}
    </div>
  );
}
