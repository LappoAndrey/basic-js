const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample( sampleActivity ) {
  let res=0;
  if (Math.sign(sampleActivity) != '1' || typeof(sampleActivity) != "string"){
    return false;
  } 
  else {
    if (sampleActivity > 0 && sampleActivity < 15.1){
      res = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(0.693/HALF_LIFE_PERIOD));
      return res;
    } else {
      return false;
    }
  }
};

module.exports = {
  dateSample
};
