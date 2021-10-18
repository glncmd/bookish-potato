/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if (!needle) return 0;
//   return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
// };

// var strStr = function (haystack, needle) {
//   if (!needle) return 0;
//   if (!haystack.includes(needle)) return -1;
//   return haystack.split(`${needle}`)[0].length;
// };

var strStr = function (haystack, needle) {
  if (needle === "" || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }

  return -1;
};
