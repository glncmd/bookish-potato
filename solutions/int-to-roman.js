/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";
  let index = 0;
  let roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  while (num) {
    if (num >= int[index]) {
      num -= int[index];
      result += roman[index];
    } else {
      index++;
    }
  }

  return result;
};
