let flattening = (arr) => {
  return arr.reduce((a, b) => a.concat(b));
};

module.exports = flattening;
