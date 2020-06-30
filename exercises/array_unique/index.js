/*
  Given an array of nums, remove the duplicates
  such that each element appear only once.

  [1,2,1]   --> [1,2]
  [1,1,1]   --> [1]
  [0,0,0,1] --> [0,1]
*/

const solution = require('./solution');

function array_unique(arr) {
  /*
    Remove the function body and write
    your own solution in place.
  */
  return solution(...arguments);
}

/*
const result = array_unique([1,1,2]);
console.log('Output:', result);
*/

module.exports = array_unique;
