require("./scripts.js");

//It filters out the elements in an array that don’t pass a test.

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

//What script a piece of text is using? This is a example
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script; // Return the object that matches the codePointAt
    }
  }
  return null;
}

// to count the characters that belong to each script. The following counting abstraction will be useful there.

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";
  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
}
