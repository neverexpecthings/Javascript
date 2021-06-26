"use strict";
var countBits = function (n) {
  var bin = n.toString(2);
  var arr = bin.toString().split("");
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "1") {
      answer++;
    }
  }
  return console.log("La cantidad de bits es de " + answer);
};

countBits(54321);

//countBits = n => n.toString(2).split('0').join('').length;
