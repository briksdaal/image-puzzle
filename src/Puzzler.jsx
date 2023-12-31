import { useState } from 'react';
import Grid from './Grid';
import shuffledArr from './helpers/shuffledArr';
import isCompleted from './helpers/isCompleted';
import Modal from './Modal';

export default function Puzzler({ puzzleData }) {
  function handleRandomizeClick(e) {
    e.preventDefault();
    setInGame(true);
    setChosenPiece(null);
    setGridArr(shuffledArr(puzzleData.numOfPieces, true));
  }

  function handleModalClick(e) {
    e.preventDefault();
    setInGame(false);
  }

  const [inGame, setInGame] = useState(false);
  const [gridArr, setGridArr] = useState(shuffledArr(puzzleData.numOfPieces));
  const [chosenPiece, setChosenPiece] = useState(null);

  const completed = isCompleted(gridArr);

  const btnText = inGame ? 'Randomize' : 'Start Game';

  return (
    <div className="mt-4 flex flex-col items-center gap-y-4 sm:mt-16 sm:gap-y-10">
      <form>
        <button
          className="w-36 rounded bg-blue-500 px-4 py-2 font-bold text-white lg:hover:bg-blue-700"
          onClick={handleRandomizeClick}>
          {btnText}
        </button>
      </form>
      <Grid
        gridArr={gridArr}
        setGridArr={setGridArr}
        puzzleData={puzzleData}
        inGame={inGame}
        chosenPiece={chosenPiece}
        setChosenPiece={setChosenPiece}
      />
      {inGame && (
        <p className="pl-4 pr-4 text-center">
          Click or drag and drop to rearrange the puzzle pieces
        </p>
      )}
      {inGame && completed && <Modal handleModalClick={handleModalClick} />}
    </div>
  );
}
