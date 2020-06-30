function max_subarray_sum(arr) {
  let maxSum = 0;
  let sum = 0;
  for (n of arr) {
    sum = Math.max(n, sum+n);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

module.exports = max_subarray_sum;
