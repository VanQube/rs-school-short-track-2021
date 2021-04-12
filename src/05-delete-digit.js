/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let curMax = 0;
  let tempDigit = 0;
  const number = String(n);
  for (let i = 0; i < number.length; i++) {
    tempDigit = number.slice(0, i) + number.slice(i + 1);
    curMax = +tempDigit > curMax ? +tempDigit : curMax;
  }
  return curMax;
}

module.exports = deleteDigit;
