/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let sentence = s.split(' ');

  sentence.sort((a, b) => a.slice(-1) - b.slice(-1));

  sentence = sentence.map((word) => word.slice(0, -1));

  return sentence.join(' ');
};
