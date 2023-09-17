export default function isCompleted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return false;
  }
  return true;
}
