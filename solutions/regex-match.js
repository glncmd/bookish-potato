/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let map = {};
  let sLength = s.length;
  let pLength = p.length;

  function check(i, j) {
    if (map[i + ":" + j] !== undefined) return map[i + ":" + j];
    if (i > sLength) return false;
    if (i === sLength && j === pLength) return true;

    if (s[i] === p[j] || p[j] == ".") {
      map[i + ":" + j] =
        p[j + 1] === "*"
          ? check(i + 1, j) || check(i, j + 2)
          : check(i + 1, j + 1);
    } else {
      map[i + ":" + j] = p[j + 1] === "*" ? check(i, j + 2) : false;
    }

    return map[i + ":" + j];
  }

  return check(0, 0);
};

// reference:
// https://www.youtube.com/watch?v=HAA8mgxlov8
// https://leetcode.com/problems/regular-expression-matching/discuss/5929/JavaScript-Solution
