const whatIsInAName = (collection, source) => {
  let keys = Object.keys(source);
  let objects = collection.filter((obj) => {
    for (let key of keys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
  return objects;
};

whatIsInAName([{first: `Romeo`, last: `Montague`}, {first: `Mercutio`, last: null}, {first: `Tybalt`, last: `Capulet`}], {last: `Capulet`});
