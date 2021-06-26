"use strict";
let sum = (a, b) => {
  let ans = 0;
  if (a == b) {
    ans = a;
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      ans += i;
    }
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      ans += i;
    }
  }
  return ans;
};

console.log(sum(-7, 7));

//Internet Solution
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

console.log(GetSum(-3, 3));
