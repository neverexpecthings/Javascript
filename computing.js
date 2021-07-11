const SCRIPTS = require("./SCRIPTS");

const characterScript = (code) => {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script; // Return the object that matches the codePointAt
    }
  }
  return null;
};

const countBy = (items, groupName) => {
  let counts = [];
  for (let item of items) {
    let direction = groupName(item);
    let known = counts.findIndex((c) => c.direction === direction);
    if (known == -1) {
      counts.push({ direction, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
};

const directionScript = (text) => {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");
  if (scripts.length === 0) return "ltr";
  // scripts is an array of objects with them dominant direction
  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).direction;
};

module.exports = directionScript;
