const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.res.length;
  },
   addLink(value='( )') {
    this.res.push(value)
    return this;
  },
   removeLink( position ) {
      if (Number.isInteger(position) && (position >= 1 ) && (position <= this.res.length) ){
      this.res.splice(position-1, 1)
      return this;
    } ;
    this.res = [];
    throw new Error ("You can't remove incorrect link!");




    
  },
  reverseChain() {
    this.res.reverse()
    return this;
    
  },
  finishChain() {
    let resFin = '';
    for (let i = 0; i < this.res.length; i ++ ) {
      resFin = resFin + `~( ${this.res[i]} )~`
    }
    this.res = [];
    let resFinsl = resFin.slice(1, resFin.length-1)
    return resFinsl;
  }
};

module.exports = {
  chainMaker
};
