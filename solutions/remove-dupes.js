/**
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function (nums) {
//   let current;
//   let i = 0;

//   while (i < nums.length) {
//     if (nums[i] !== current) {
//       current = nums[i];
//       i++;
//     } else {
//       nums.splice(i, 1);
//     }
//   }
// };

var removeDuplicates = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
};
