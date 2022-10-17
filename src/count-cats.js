const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = 0;
  for (let i = 0; i < matrix.length; i ++ ) {
    for (let i_in = 0; i_in < matrix[i].length; i_in ++ ){
      if (matrix[i][i_in] === '^^') {
        res=res+1;  
      } 
    }
  }  
  return res;
}

module.exports = {
  countCats
};
