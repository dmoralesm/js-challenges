/*
  https://leetcode.com/articles/arranging-coins/
*/
function arranging_coins(n) {
  return parseInt(Math.pow(2 * n + 0.25, 0.5) - 0.5);
}

module.exports = arranging_coins;
