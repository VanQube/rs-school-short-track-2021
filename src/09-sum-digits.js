/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let digitsOfNumber = n;
  let sum = 0;
  while (digitsOfNumber > 10) {
    sum += digitsOfNumber % 10;
    digitsOfNumber = Math.floor(digitsOfNumber / 10);
  }

  sum += digitsOfNumber;

  if (sum >= 10) {
    sum = Math.floor(sum / 10) + (sum % 10);
  }
  return sum;
}

module.exports = getSumOfDigits;
