/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
// solution 1
var reversePrefix = function (word, ch) {
  let chIndex = word.indexOf(ch);
  let finalString = "";

  if (chIndex <= 0) return word;

  for (let i = chIndex; i >= 0; i--) {
    finalString += word[i];
  }

  finalString += word.slice(chIndex + 1);

  return finalString;
};

// solution 2
var reversePrefixTwo = function (word, ch) {
  let chIndex = word.indexOf(ch);

  return (
    word
      .split("")
      .slice(0, chIndex + 1)
      .reverse()
      .join("") + word.slice(chIndex + 1)
  );
};
