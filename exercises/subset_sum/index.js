/*
  Given an array of non-negative integers, and a value sum,
  determine the indexes of the first two numbers of the given
  array with sum equal to given sum.

  [1,2,3], 4     --> [0,2]
  [1,2,3], 5     --> [1,2]
  [1,2,3], 6     --> []
  [2,1,8,9], 10  --> [0,2]
*/

const solution = require('./solution');

function subset_sum(arr, target) {
  /*
    Remove the function body and write
    your own solution in place.
  */
  return solution(...arguments);
}

const result = subset_sum([1,4,5], 6);
console.log('Output:', result);

module.exports = subset_sum;
