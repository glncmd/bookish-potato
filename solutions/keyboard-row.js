/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  let validWords = words.filter((word) => checkWord(word));

  function checkWord(word) {
    return rows.some((row) =>
      [...word.toLowerCase()].every((letter) => row.includes(letter))
    );
  }

  return validWords;
};
