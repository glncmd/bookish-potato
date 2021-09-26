/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sSum1 = 0;
  for (let i = 0; i < s.length; i++) {
    sSum1 += s[i].charCodeAt();
  }

  let tSum = 0;
  for (let i = 0; i < t.length; i++) {
    tSum += t[i].charCodeAt();
  }

  return String.fromCharCode(tSum - sSum1);
};
