import { useEffect } from 'react';
import image from './assets/image';
import { useState } from 'react';
import Puzzler from './Puzzler';

function App() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [start, setStart] = useState({ rows: 3, cols: 3 });

  useEffect(() => {
    image.onload = () => {
      setWidth(image.naturalWidth);
      setHeight(image.naturalHeight);
    };
  }, []);

  return (
    <>
      {/* <form>
        <label>
          Rows:{' '}
          <input
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Columns:{' '}
          <input
            value={cols}
            onChange={(e) => setCols(e.target.value)}
            type="text"
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setStart({ rows, cols });
          }}>
          Render puzzle
        </button>
      </form> */}
      {width && height && start && (
        <Puzzler
          image={image.src}
          width={width}
          height={height}
          rows={start.rows}
          cols={start.cols}
        />
      )}
    </>
  );
}

export default App;
