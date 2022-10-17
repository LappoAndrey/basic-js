const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringstrachine {
	
constructor(isDirect) {
	if (isDirect == false)
		this.reverse = true;
	}
	  
encrypt(m, k) {
	if(!m || !k) {
		throw new Error('Incorrect arguments!');
	}
		const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		m = m.toUpperCase();
		k = k.toUpperCase();
		let r = '';	
		let j = 0;
		for(let i=0; i<m.length; i++){
			if(a.includes(m[i])) { 			
				let mi = a.indexOf(m[i]);
				let ki_s = k[(j >= k.length) ? (j % k.length) : j];
				let ki = a.indexOf( ki_s );
				let c = a[(mi + ki) % 26];			
				r += c;	
				j++;}
			else r += m[i];															
		}
		return this.reverse ? r.split('').reverse().join('') : r;
	};
  
decrypt(m, k) {
	if(!m || !k) {
		throw new Error('Incorrect arguments!');
	}
		let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		m = m.toUpperCase();
		k = k.toUpperCase();
		let r = '';	
		let j = 0;
		for(let i=0; i<m.length; i++){
			if(a.includes(m[i])) { 			
				let mi = a.indexOf(m[i]);
				let ki_s = k[(j >= k.length) ? (j % k.length) : j];
				let ki = a.indexOf( ki_s );
				let c = a[(26 + mi - ki) % 26]; 			
				r += c;	
				j++;}
			else r += m[i];															
		}
		return this.reverse ? r.split('').reverse().join('') : r;
	};
};

module.exports = {
  VigenereCipheringMachine
};
