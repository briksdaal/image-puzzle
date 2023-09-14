export default function shuffledArr(n, shuffle) {
  const arr = Array.from({ length: n }, (val, idx) => idx);

  if (!shuffle) return arr;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
