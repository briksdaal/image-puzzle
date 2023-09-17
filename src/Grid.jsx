import Piece from './Piece';
import ActivePiece from './ActivePiece';

export default function Grid({
  gridArr,
  setGridArr,
  puzzleData,
  inGame,
  chosenPiece,
  setChosenPiece
}) {
  function switchPieces(droppedPiece, currentPiece) {
    setGridArr((arr) =>
      arr.map((p) => {
        if (p === droppedPiece) return currentPiece;
        if (p === currentPiece) return droppedPiece;
        return p;
      })
    );

    setChosenPiece(null);
  }

  return (
    <div
      className="inline-grid justify-center gap-2"
      style={{
        gridTemplateRows: `repeat(${puzzleData.rows}, ${puzzleData.pieceHeight}px)`,
        gridTemplateColumns: `repeat(${puzzleData.cols}, ${puzzleData.pieceWidth}px)`
      }}>
      {gridArr.map((p) =>
        inGame ? (
          <ActivePiece
            key={p}
            id={p}
            puzzleData={puzzleData}
            switchPieces={switchPieces}
            chosenPiece={chosenPiece}
            setChosenPiece={setChosenPiece}
            inGame={inGame}
          />
        ) : (
          <Piece key={p} id={p} puzzleData={puzzleData} />
        )
      )}
    </div>
  );
}
