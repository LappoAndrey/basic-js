const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {

	let indexOfEmail = email.indexOf('@');
	let result = email.slice(indexOfEmail+1, email.length);
	if (result.indexOf('@') === '-1') {
		return result
	} else 
		indexOfEmail = result.indexOf('@');
		result = result.slice(indexOfEmail+1, email.length);
	
   return result
}


module.exports = {
  getEmailDomain
};
