// This is what i want:
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #

let chessBoard = "";
let size = 10;
for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        chessBoard += " ";
      } else {
        chessBoard += "#";
      }
    }
  } else {
    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        chessBoard += "#";
      } else {
        chessBoard += " ";
      }
    }
  }
  chessBoard += "\n";
}
console.log(chessBoard);
