/**
 * @param {number[]} height
 * @return {number}
 */
// brute force (time limit exceeded)
// var maxArea = function (height) {
//   let maxProd = 0;

//   for (let i = 0; i < height.length - 1; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let prod = Math.min(height[i], height[j]) * (j - i);

//       if (prod >= maxProd) maxProd = prod;
//     }
//   }

//   return maxProd;
// };

var maxArea = function (height) {
  let maxProd = 0;

  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    prod = Math.min(height[i], height[j]) * (j - i);

    if (prod >= maxProd) maxProd = prod;

    if (height[i] > height[j]) j--;
    else i++;
  }

  return maxProd;
};
