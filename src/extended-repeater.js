const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options )  {

	let strCall = 1;
	let strSep = '+';
	let strAdd = '';
	let strAddCall = 1;
	let strAddSep = '|';
  
	for (const property in options) {
  
  
	  if (property === 'repeatTimes'){
		strCall = options[property];
		
	  }
		else if (property === 'separator'){
		  strSep = options[property];
		  
		}
		  else if (property === 'addition'){
			strAdd = options[property];
			
		  }
			else if (property === 'additionRepeatTimes'){
			  strAddCall = options[property];
			  
			}
			  else if (property === 'additionSeparator'){
				strAddSep = options[property];
				
			  }
			  
	};
	
  if ((strAddCall === 1) ) {strAddSep=''};
  
  let result = '';
  let addCall = (strAdd+strAddSep).repeat(strAddCall)
  addCall = addCall.slice(0, addCall.length-strAddSep.length)
  for (let i = 0; i < strCall; i ++) {
	result += str + addCall + strSep
  }
  
  result = result.slice(0, result.length-strSep.length)
  
  return result
  }

module.exports = {
  repeater
};
