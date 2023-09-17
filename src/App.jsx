import { useEffect } from 'react';
import image from './assets/image';
import { useState } from 'react';
import Puzzler from './Puzzler';
import getPuzzleData from './helpers/getPuzzleData';

function App() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    image.onload = () => {
      setWidth(image.naturalWidth);
      setHeight(image.naturalHeight);
    };
  }, []);

  if (!width || !height)
    return (
      <div className="flex h-screen flex-col items-center justify-center ">
        <h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
      </div>
    );

  const puzzleData = getPuzzleData(image.src, width, height, 3, 3);

  return <Puzzler puzzleData={puzzleData} />;
}

export default App;
