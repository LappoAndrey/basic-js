const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!");
  } ;
  let res =[];
  var copyArr = arr.slice();
  for (let i = 0; i < copyArr.length; i ++ ) {
    if ((copyArr[i] === undefined) || (copyArr[i] === '--double-prev' && copyArr[i-1] === undefined) || (copyArr[i] === '--discard-prev' && copyArr[i-1] === undefined) ) {
      continue;
    } else if (i === 0 && (copyArr[i] === '--discard-prev' || copyArr[i] === '--double-prev')){
      continue;
      } else if (i === copyArr.length-1 && (copyArr[i] === '--double-next' || copyArr[i] === '--discard-next')){
        continue; 
        }  else {
        if (copyArr[i] === '--discard-next' && copyArr[i+1] !== undefined){
        delete copyArr[i+1];
        } else if (copyArr[i] === '--discard-prev' && copyArr[i-1] !== undefined){
          res.pop(); 
          } else if (copyArr[i] === '--double-next' && copyArr[i+1] !== undefined){
            res.push(copyArr[i+1]);
            } else if (copyArr[i] === '--double-prev' && copyArr[i-1] !== undefined){
              res.push(copyArr[i-1]);
              } else res.push(copyArr[i]);

      }
    }
  return res;
};

module.exports = {
  transform
};
