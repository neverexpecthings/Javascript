const loop = require("./ownLoop");
//! Value -> Value
//* produce a loop that returns the given value

// let loop (value, test, update, body) -> 0 //stub

// function loop(value, test, update, body) {    //template
//   (...value, test, update, body)
// }

test("log ", () => {
  expect(
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      console.log
    )
  ).toBe(3, 2, 1);
});
