export default function Piece({ id, puzzleData, dragAndDrop }) {
  const pieceData = puzzleData.array[id];

  const div = (
    <div
      draggable
      style={{
        backgroundImage: `url(${puzzleData.image.src})`,
        width: `${Math.floor(puzzleData.pieceWidth)}px`,
        height: `${puzzleData.pieceHeight}px`,
        backgroundPosition: `${pieceData.xOffset}px ${pieceData.yOffset}px`
      }}
      onDrag={(e) => dragAndDrop.handleDrag(e, id)}
      onDrop={(e) => dragAndDrop.handleDrop(e, id)}
      onDragOver={(e) => e.preventDefault()}
    />
  );

  const imgel = (
    <img
      draggable
      src={puzzleData.image.src}
      style={{
        objectPosition: `${pieceData.xOffset}px ${pieceData.yOffset}px`,
        width: `${Math.floor(puzzleData.pieceWidth)}px`,
        height: `${puzzleData.pieceHeight}px`,
        objectFit: 'none'
      }}
      onDrag={(e) => dragAndDrop.handleDrag(e, id)}
      onDrop={(e) => dragAndDrop.handleDrop(e, id)}
      onDragOver={(e) => e.preventDefault()}
    />
  );

  return div;
}
