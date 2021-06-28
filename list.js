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

arrayToList(arr);

listToArray(linkedList);
