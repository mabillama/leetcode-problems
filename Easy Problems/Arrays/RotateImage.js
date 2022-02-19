/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Matrixes property. Just swap elements on both side of the identity diagonal and then reverse the arrays.

  for (let row = 0; row < matrix[0].length; row++) {
    for (let col = row; col < matrix[0].length; col++) {
      [matrix[col][row], matrix[row][col]] = [
        matrix[row][col],
        matrix[col][row],
      ];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }
  console.log(matrix);

  /* BRUTE FORCE ATTEMPT
  let temp = 0;
  let temp2 = 0;
  for (let i = 0; i < Math.ceil(matrix.length / 2); i++) {
    for (let j = i; j < matrix.length - (i + 1); j++) {
      temp = matrix[j][matrix.length - 1 - i];
      // console.log(matrix.length - 1 - i - j);
      matrix[j][matrix.length - 1 - i] = matrix[i][j];
      console.log(matrix);

      temp2 = matrix[matrix.length - 1 - i][matrix.length - 1 - i - j];
      console.log(temp);
      console.log(temp2);
      matrix[matrix.length - 1 - i][matrix.length - 1 - i - j] = temp;
      console.log(matrix);

      temp = matrix[matrix.length - 1 - i - j][i];
      matrix[matrix.length - 1 - i - j][i] = temp2;
      console.log(matrix);

      matrix[i][j] = temp;
      console.log(matrix);
    }
  }*/
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// rotate(matrix);
Output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);

Output = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
// Maybe a sequential formula for the position might be better suited than finding the mental logics of it
