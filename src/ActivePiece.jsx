import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Piece from './Piece';
export default function ActivePiece({
  id,
  puzzleData,
  switchPieces,
  chosenPiece,
  setChosenPiece
}) {
  function handleClick() {
    if (chosenPiece === null) {
      setChosenPiece(id);
    } else if (chosenPiece === id) {
      setChosenPiece(null);
    } else {
      switchPieces(chosenPiece, id);
      setChosenPiece(null);
    }
  }

  const ref = useRef(null);

  const [, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => switchPieces(item.id, id)
  }));

  const [, drag] = useDrag(() => ({
    type: 'piece',
    item: () => {
      setChosenPiece(id);
      return { id };
    },
    end: () => setChosenPiece(null)
  }));

  drag(drop(ref));

  return (
    <div
      className={
        chosenPiece === id ? 'outline outline-8 outline-rose-500' : undefined
      }
      ref={ref}
      onClick={handleClick}>
      <Piece id={id} puzzleData={puzzleData} />
    </div>
  );
}
