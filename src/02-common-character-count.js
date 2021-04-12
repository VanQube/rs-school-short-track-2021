/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonLetters = 0;
  let firstString = s1;
  const secondString = s2;
  for (let str = 0; str < secondString.length; str++) {
    if (firstString.includes(secondString[str])) {
      commonLetters++;
      firstString = firstString.replace(secondString[str], '');
    }
  }
  return commonLetters;
}

module.exports = getCommonCharacterCount;
