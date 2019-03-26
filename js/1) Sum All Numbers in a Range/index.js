const sumAll = (arr) => {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let temp = 0;
  for (let i = min; i <= max; i++) {
    temp += i;
  }
  return (temp);
};

sumAll([1, 4]);
