/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let index = 0;
  let count = 0;

  while (index + 2 < s.length) {
    let substring = new Set(s.slice(index, index + 3));
    if (substring.size == 3) count++;
    index++;
  }

  return count;
};
