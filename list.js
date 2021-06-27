let linkedList = {
  value: 1,
  pointer: {
    value: 2,
    pointer: {
      value: 3,
      pointer: null,
    },
  },
};
let arr = [1, 2, 3];
let arrayToList = function (arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    list = { value: element, pointer: list };
  }

  console.log(list);
};

arrayToList(arr);
