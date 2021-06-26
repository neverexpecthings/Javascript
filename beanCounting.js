const countBs = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      count++;
    }
  }
  console.log(count);
};

countBs(
  "Because this manner of technology is the Best way to make Best things, very best"
);

const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  console.log(count);
};

countChar(
  "Because this manner of technology is the Best way to make Best things, very best",
  "t"
);
