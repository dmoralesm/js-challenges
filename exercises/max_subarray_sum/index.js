/*
Given an array of n numbers, our task is to calculate the maximum
subarray sum, i.e., the largest possible sum of a sequence of
consecutive values in the array.

For example, in the array: [-1,2,4,-3,5,2,-5,2]
the following subarray produces the maximum sum 10: [2,4,-3,5,2]

[-1,1,2,3] --> [1,2,3] --> 6
[5,3,-4]   --> [5,3]   --> 8
*/

const solution = require('./solution');

function max_subarray_sum(arr) {
  /*
    Remove the function body and write
    your own solution in place.
  */
  return solution(...arguments);
}

/*
const result = max_subarray_sum([-1,2,4,-3,5,2,-5,2]);
console.log('Output:', result);
*/

module.exports = max_subarray_sum;

