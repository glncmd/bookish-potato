/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // skip if current number is same with previous
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let target = 0 - nums[i];
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[j] + nums[k];
      if (sum === target) {
        result.push([nums[i], nums[j], nums[k]]);

        // increment j / decrement k to skip same values
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // move to next unique value
        j++;
        k--;
      }
      if (sum > target) k--;
      if (sum < target) j++;
    }
  }
  return result;
};

// reference to solution:
// https://www.youtube.com/watch?v=jXZDUdHRbhY
