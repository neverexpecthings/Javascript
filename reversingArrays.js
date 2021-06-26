let reverseArray = (arr) => {
  reverseArray = [];
  for (const iterator of arr) {
    reverseArray.unshift(iterator);
  }
  return console.log(reverseArray);
};

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//reverseArray(numbers);

let reverseArrayInPlace = (arr) => {
  for (let index = 0; index < Math.floor(arr.length / 2); index++) {
    let wrap = arr.length - 1 - index;
    [arr[index], arr[wrap]] = [arr[wrap], arr[index]];
  }
  return arr;
};
console.log(reverseArrayInPlace(numbers));
console.log(numbers);

//Last update: The best way to do this was using destructuring to swap opposite sides
