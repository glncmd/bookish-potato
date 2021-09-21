/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {
  let total = 0;

  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    roman[s[i]] < roman[s[i + 1]]
      ? (total -= roman[s[i]])
      : (total += roman[s[i]]);
  }

  return total;
}
