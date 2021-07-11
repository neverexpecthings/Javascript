const processData = (n, array) => {
  const mean = (n, array) =>
    Math.round((array.reduce((a, b) => a + b) / n) * 10) / 10;

  const median = (array) => {
    let sorted = array.sort((a, b) => a - b);
    if (array.length % 2 === 0) {
      let i = sorted.length / 2 - 1;
      let j = sorted.length / 2;
      console.log(sorted[i], sorted[j]);
      return Math.round(((sorted[i] + sorted[j]) / 2) * 10) / 10;
    } else {
      let i = Math.round(sorted.length / 2);
      return sorted[i];
    }
  };

  const mode = (array) => {
    let sorted = array.sort((a, b) => a - b);
    let counts = [];
    for (let item of sorted) {
      let known = counts.findIndex((c) => c.item === item);
      if (known == -1) {
        counts.push({ item, count: 1 });
      } else {
        counts[known].count++;
      }
    }
    if (!counts.some((c) => c.count > 1)) {
      return counts[0].item;
    } else {
      return counts.reduce((a, b) => (a.count < b.count ? b : a)).item;
    }
  };

  return `Mean: ${mean(n, array)}\nMedia: ${median(array)}\nMode: ${mode(
    array
  )}`;
};

module.exports = processData;
