const isEven = (n) => {
  if (n < 0) {
    n = n * -1;
    return isEven(n - 2);
  } else if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
};

console.log(isEven(23));

module.exports = isEven;
