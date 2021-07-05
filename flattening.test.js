const flattening = require("./flattening.js");
//! Arrays -> Array
//* produce a unique array from given array of Arrays

// function flattening (['a'], ['b']) -> ['a', 'b']

// flattening(arr) {
// ...arg
// }

let vegetables = [
  ["carrot", "potatoe", "tomatoe"],
  ["celery", "cilantro", "lechuga"],
];

describe("flattening", () => {
  test("vegetables", () => {
    expect(flattening(vegetables)).toStrictEqual([
      "carrot",
      "potatoe",
      "tomatoe",
      "celery",
      "cilantro",
      "lechuga",
    ]);
  });

  test("should ", () => {
    expect(flattening([["a"], ["b"]])).toStrictEqual(["a", "b"]);
  });

  test("should ", () => {
    expect(flattening([["a"], [["b"], ["c"]]])).toStrictEqual(["a", "b", "c"]);
  });
});
