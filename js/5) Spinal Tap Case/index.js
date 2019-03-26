const spinalCase = (str) => {
  str = str.replace(/([a-z])([A-Z])/g, `$1 $2`);
  return str.replace(/\s+|_+/g, `-`).toLowerCase();
};

spinalCase(`This Is Spinal Tap`);
