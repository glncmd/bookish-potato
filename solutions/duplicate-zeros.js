/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let length = arr.length;
  let index = 0;

  while (index < length) {
    if (arr[index] == 0) {
      arr.splice(index, 0, 0);
      index++;
    }
    index++;
  }

  arr.length = length;
};

// Alternative Solution
// var duplicateZeros = function (arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       arr.splice(i, 0, 0);
//       arr.pop();
//       i++;
//     }
//   }
// };
