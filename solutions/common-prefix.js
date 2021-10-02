/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";

  // First find the shortest string in the array as a reference
  // the length of this string is the maximum length of our prefix
  let reference = strs.reduce((shortest, str) =>
    shortest.length <= str.length ? shortest : str
  );

  for (let i = 0; i < reference.length; i++) {
    if (strs.every((str) => str[i] === reference[i])) {
      prefix += reference[i];
    } else {
      break;
    }
  }

  return prefix;
};
