const { NotImplementedError } = require("../extensions/index.js");

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
  let result = 0;
  let numArr = [];
  while (n !== 0) {
    numArr.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let index = 0; index < numArr.length; index++) {
    let i = 0;
    for (let j = numArr.length - 1; j >= 0; j--) {
      if (j !== index) {
        i = i * 10 + numArr[j];
      }
    }
    result = Math.max(i, result);
  }
  return result;
}

module.exports = {
  deleteDigit,
};
