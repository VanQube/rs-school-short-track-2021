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
  let currChar = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === currChar) {
      counter++;
    } else {
      if (counter === 1) {
        encdStr += currChar;
      } else {
        encdStr += counter + currChar;
      }
      currChar = str[i];
      counter = 1;
    }
    if (i === str.length - 1) {
      if (counter === 1) {
        encdStr += currChar;
      } else {
        encdStr += counter + currChar;
      }
    }
  }
  return encdStr;
}

module.exports = encodeLine;
