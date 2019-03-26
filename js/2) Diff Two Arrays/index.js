const diffArray = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];

  const searchInBoth = (x) => {
    return arr1.indexOf(x) === -1 || arr2.indexOf(x) === -1;
  };
  return newArr.filter(searchInBoth);
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
