function solution(arr) {
  const len = arr.length;
  const filled = 2 ** Math.ceil(Math.log2(len)) - len;
  return [...arr, ...Array(filled).fill(0)];
}