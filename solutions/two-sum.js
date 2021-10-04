/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // one-pass hash table using Map data strtucture
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let findNum = target - nums[i];

    if (myMap.has(findNum)) {
      return [myMap.get(findNum), i];
    } else {
      myMap.set(nums[i], i);
    }
  }
};
