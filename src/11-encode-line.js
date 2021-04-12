/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  let counter = 1;
  let encdStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else if (counter > 1) {
      encdStr += counter + str[i];
      counter = 1;
    } else {
      encdStr += str[i];
    }
  }
  return encdStr;
}

module.exports = encodeLine;
