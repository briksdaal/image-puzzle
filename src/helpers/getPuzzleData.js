export default function getPuzzleData(image, width, height, rows, cols) {
  const ratio =
    window.screen.width > width ? 1 : (window.screen.width - 30) / width;

  const pieceWidth = Math.floor((width / cols) * ratio);
  const pieceHeight = Math.floor((height / rows) * ratio);

  const piecesArr = [];
  let idx = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const piece = {
        id: idx++,
        xOffset: -1 * pieceWidth * j,
        yOffset: -1 * pieceHeight * i
      };
      piecesArr.push(piece);
    }
  }

  return {
    image: {
      src: image,
      width: Math.floor(width * ratio),
      height: Math.floor(height * ratio)
    },
    numOfPieces: rows * cols,
    rows,
    cols,
    array: piecesArr,
    pieceWidth,
    pieceHeight
  };
}
