let linkedList = {
  value: "a",
  pointer: {
    value: "b",
    pointer: {
      value: 3,
      pointer: null,
    },
  },
};
let arr = [1, 2, 3];

let arrayToList = function (arr) {
  let list = null;
  //! Here we iterate backward the array
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    //* Here we add the index to value then pointer will add a new node
    list = { value: element, pointer: list };
  }

  console.log(list);
};

let listToArray = function (list) {
  let array = [];
  //! What other way can be use?
  for (let node = list; node; node = node.pointer) {
    const element = node.value;
    array.push(element);
  }
  console.log(array);
};

let prepend = function (element, list) {
  return (list = { value: element, pointer: list });
};

let nth = function (list, n) {
  let count = 1;
  for (let node = list; node; node = node.pointer) {
    if (count !== n) {
      count++;
    } else {
      return node.value;
    }
  }
};
let recurseNth = function (list, n, count = 1) {
  if (count === n) {
    if (list != null) {
      return list.value;
    } else return undefined;
  } else return recurseNth(list.pointer, n, count + 1);
};

// console.log(prepend(0, linkedList));

// arrayToList(arr);

console.log(nth(linkedList, 4));

console.log(recurseNth(linkedList, 1));
