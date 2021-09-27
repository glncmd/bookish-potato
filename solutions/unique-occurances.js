/**
 * @param {number[]} arr
 * @return {boolean}
 */

// solution 1
var uniqueOccurrences = function (arr) {
  let dict = {};

  for (let number of arr) {
    !(number in dict) ? (dict[number] = 1) : (dict[number] += 1);
  }

  let dictValues = Object.values(dict);

  if (new Set(dictValues).size == dictValues.length) return true;
  else return false;
};

//solution 2
var uniqueOccurrencesTwo = function (arr) {
  let myMap = new Map();

  for (let number of arr) {
    if (myMap.has(number)) {
      myMap.set(number, myMap.get(number) + 1);
    } else {
      myMap.set(number, 1);
    }
  }

  let mySet = new Set();

  for (const value of myMap.values()) {
    if (mySet.has(value)) return false;
    mySet.add(value);
  }

  return true;
};
