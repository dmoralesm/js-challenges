/*
  Given four digits, count how many valid times can be
  displayed on a digital clock (in 24-hour format)
  using those digits.

  The earliest time is 00:00 and the latest time is 23:59.

  Given 2, 3, 3, 2  -->  3 (22:33, 23:23 and 23:32)
  Given 1, 8, 3, 2  -->  6 (12:38, 13:28, 18:23, 18:32, 21:38 and 23:18)
  Given 6, 2, 4, 7  -->  0 (It is not possible to display any valid time)

*/

const solution = require('./solution');

function correct_hours(A, B, C, D) {
  /*
    Remove the function body and write
    your own solution in place.
  */
  return solution(...arguments);
}

/*
const result = correct_hours(1,2,3,4);
console.log('Output:', result);
*/

module.exports = correct_hours;
