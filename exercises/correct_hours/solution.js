function correct_hours(A, B, C, D) {
  if (A < 0 || B < 0 || C < 0 || D < 0) {
    return 0;
  }

  const permutations = [
    '' + A + B + ':' + C + D,
    '' + A + B + ':' + D + C,
    '' + A + C + ':' + B + D,
    '' + A + C + ':' + D + B,
    '' + A + D + ':' + B + C,
    '' + A + D + ':' + C + B,
    '' + B + A + ':' + C + D,
    '' + B + A + ':' + D + C,
    '' + B + C + ':' + A + D,
    '' + B + C + ':' + D + A,
    '' + B + D + ':' + A + C,
    '' + B + D + ':' + C + A,
    '' + C + A + ':' + B + D,
    '' + C + A + ':' + D + B,
    '' + C + B + ':' + A + D,
    '' + C + B + ':' + D + A,
    '' + C + D + ':' + A + B,
    '' + C + D + ':' + B + A,
    '' + D + A + ':' + B + C,
    '' + D + A + ':' + C + B,
    '' + D + B + ':' + A + C,
    '' + D + B + ':' + C + A,
    '' + D + C + ':' + A + B,
    '' + D + C + ':' + B + A,
  ];

  const uniquePermutations = Array.from(new Set(permutations));

  const validTimes = uniquePermutations.filter((time) => {
    const timeArr = time.split(':');
    if (timeArr[0] > 23) {
      return false;
    } else if (timeArr[1] > 59) {
      return false;
    }

    return true;
  });

  return validTimes.length;
}

module.exports = correct_hours;
