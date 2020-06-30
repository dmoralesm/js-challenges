function subset_sum(arr, target) {
  for (let i=0; i < arr.length; i++) {
    const n = arr[i];
    const search = target - n;
    const searchIndex = arr.indexOf(search);
    if (searchIndex >= 0 & i !== searchIndex) {
      return [i, searchIndex]
    }
  }
  return [];
}

module.exports = subset_sum;
