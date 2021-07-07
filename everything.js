let every = (arr, predicate) => {
  if (!arr.length) return "Please, not try to fuck me with empty array";
  if (!predicate) return "What it's supposed to do without a function?";
  for (const element of arr) {
    predicate(element);
    if (predicate(element) == false) return false;
  }
  return true;
};

const arr = ["hello", "this", "isss", "test", "true"];

console.log(every(arr, (n) => n.length > 3));
module.exports = every;
