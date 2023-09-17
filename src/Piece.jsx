export default function Piece({ id, puzzleData }) {
  const pieceData = puzzleData.array[id];

  return (
    <div
      style={{
        backgroundImage: `url(${puzzleData.image.src})`,
        backgroundSize: `${puzzleData.image.width}px ${puzzleData.image.height}px`,
        width: `${puzzleData.pieceWidth}px`,
        height: `${puzzleData.pieceHeight}px`,
        backgroundPosition: `${pieceData.xOffset}px ${pieceData.yOffset}px`
      }}
    />
  );
}
