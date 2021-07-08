let every = (arr, predicate) => {
  if (!arr.length) return "Please, not try to fuck me with empty array";
  if (!predicate) return "What it's supposed to do without a function?";
  for (const element of arr) {
    predicate(element);
    if (predicate(element) == false) return false;
  }
  return true;
};

let everySome = (arr, predicate) => {
  let trueOrFalse = !arr.some((element) => !predicate(element));
  return trueOrFalse;
};

module.exports = every;
module.exports = everySome;
