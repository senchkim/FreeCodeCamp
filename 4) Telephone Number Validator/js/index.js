const telephoneCheck = (str) => {
  let regNum = /^\+?1?[-\s]?(\(([0-9]{3})\)|[0-9]{3})[-\s]?([0-9]{3})[-\s]?([0-9]{4})$/g;
  return regNum.test(str);
};

telephoneCheck(`555-555-5555`);

