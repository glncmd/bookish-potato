/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let results = [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let len = digits.length;
  if (!len) return [];

  function dfs(pos, str) {
    if (pos === len) results.push(str);
    else {
      let letters = map[digits[pos]];
      for (let i = 0; i < letters.length; i++) {
        dfs(pos + 1, str + letters[i]);
      }
    }
  }

  dfs(0, "");
  return results;
};
