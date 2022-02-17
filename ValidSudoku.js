/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // validate horizontally and vertically
  let tempHor = new Set();
  let tempVer = new Set();

  for (let i = 0; i < 9; i++) {
    tempHor.clear();
    tempVer.clear();
    console.log(tempHor);
    console.log(tempVer);
    for (let j = 0; j < 9; j++) {
      if (tempHor.has(board[i][j])) {
        return false;
      } else if (tempVer.has(board[j][i])) {
        return false;
      } else {
      }
      if (board[i][j] !== ".") {
        tempHor.add(board[i][j]);
        console.log(tempHor);
      }
      if (board[j][i] !== ".") {
        tempVer.add(board[j][i]);
        console.log(tempVer);
      }
    }
  }

  // returns true if passes all tests
  return true;
};

Input: board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
console.log(board[0][0]);
console.log(board[0][1]);
console.log(board[0][2]);
