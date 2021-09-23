/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let current = [...nums];
    let isIncreasing = true;

    current.splice(i, 1);

    for (let j = 0; j < current.length - 1; j++) {
      if (!(current[j] < current[j + 1])) {
        isIncreasing = false;
        break;
      }
    }

    if (isIncreasing) return true;
  }

  return false;
};
