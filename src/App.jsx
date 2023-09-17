import { useEffect } from 'react';
import image from './assets/image';
import { useState } from 'react';
import Puzzler from './Puzzler';
import getPuzzleData from './helpers/getPuzzleData';

function App() {
  const [puzzleData, setPuzzleData] = useState(null);

  useEffect(() => {
    image.onload = () => {
      setPuzzleData(
        getPuzzleData(image.src, image.naturalWidth, image.naturalHeight, 3, 3)
      );
    };
  }, []);

  if (!puzzleData)
    return (
      <div className="flex h-screen flex-col items-center justify-center ">
        <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
      </div>
    );

  return <Puzzler puzzleData={puzzleData} />;
}

export default App;
