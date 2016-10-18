'use strict';

module.exports = (string) => {
  // return string.split('').reverse().join('');

  //how do we make it more performant
  //O(n) - big O notation, linear scaling, grabbing the most significant factors are and isolating them
  let result = '';
  for (let i =  string.length-1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};
