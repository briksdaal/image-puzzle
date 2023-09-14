import Piece from './Piece';

export default function AvailablePieces({ availableArr, puzzleData }) {
  return (
    <div
      className="available"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {availableArr.map((p) => (
        <Piece key={p} id={p} puzzleData={puzzleData} />
      ))}
    </div>
  );
}
