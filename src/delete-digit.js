const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
	let list = n.toString().split("");
	let minValue = Math.min.apply( Math, list );
	const indexMin = list.indexOf(minValue.toString());
	list.splice(indexMin, 1);
	let result = Number(list.join(""))
	return result
}

module.exports = {
  deleteDigit
};
