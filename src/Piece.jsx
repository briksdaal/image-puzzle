export default function Piece({ id, puzzleData }) {
  const pieceData = puzzleData.array[id];

  return (
    <div
      style={{
        backgroundImage: `url(${puzzleData.image.src})`,
        width: `${puzzleData.pieceWidth}px`,
        height: `${puzzleData.pieceHeight}px`,
        backgroundPosition: `${pieceData.xOffset}px ${pieceData.yOffset}px`
      }}
      onClick={() => puzzleData.setSelected(id)}
    />
  );
}
