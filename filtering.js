require("./scripts.js");

//to filter into a ner array

let filtered = SCRIPTS.filter((s) => s.direction === "rtl");

//to map the given array to make a new array in a new form

let mapped = filtered.map((s) => s.name);

//to reduce will take 3 parameters (array, function, start) and "fold" the given array

let summarizing = [1, 2, 3, 4].reduce((a, b) => a + b);

// To use reduce (twice) to find the script with the most characters, we can write something like this

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
});
