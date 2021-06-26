"use strict";
let range = (start, end, step = 1) => {
  let arr = [];
  let max = Math.max(start, end);
  let min = Math.min(start, end);
  if (step < 0) {
    for (let i = min; i <= max; i -= step) {
      arr.unshift(i);
    }
    return arr;
  }
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
};

let sum = (arr) => {
  let result = 0;
  for (const iterator of arr) {
    result += iterator;
  }
  return result;
};
console.log(range(2, 10, -2));
console.log(sum(range(1, 6)));
