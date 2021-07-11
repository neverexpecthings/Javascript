const processData = require("./statistics");
// Mean, Media and Mode

//! Number, Array -> Number
//* produce the mean. media and mode of a given array and N

// function processData(N, array) -> 0

describe("Mean, media and mode", function () {
  test("should be", () => {
    let array = [
      64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060,
    ];
    expect(processData(10, array)).toBe(
      "Mean: 43900.6\nMedia: 44627.5\nMode: 4978"
    );
  });
});
