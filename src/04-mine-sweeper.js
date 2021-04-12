/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];

  for (let j = 0; j < matrix.length; j++) {
    res[j] = [];
    for (let k = 0; k < matrix[0].length; k++) {
      res[j][k] = 0;

      for (let i = -1; i <= 1; i++) {
        for (let o = -1; o <= 1; o++) {
          if ((i || o) && matrix[j + i] && matrix[j + i][k + o]) {
            res[j][k]++;
          }
        }
      }
    }
  }
  return res;
}

module.exports = minesweeper;
