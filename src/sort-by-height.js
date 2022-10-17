const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
	let newArr = []
	let result = []
	for (let i = 0; i < arr.length; i ++) {
		if (arr[i] !== -1) {
		newArr.push(arr[i])
		}
	}

	function compareNumbers(a, b) {
		return a - b;
	  }
	newArr.sort(compareNumbers)

	let j = 0

	for (let i = 0; i < arr.length; i ++) {
		if (arr[i] !== -1) {
			result.push(newArr[j])
			j++
		}
		else result.push(arr[i])
	}

return result
}

module.exports = {
  sortByHeight
};
