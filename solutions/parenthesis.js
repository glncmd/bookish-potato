/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   while (true) {
//     if (s.includes("()")) s = s.replace("()", "");
//     else if (s.includes("[]")) s = s.replace("[]", "");
//     else if (s.includes("{}")) s = s.replace("{}", "");
//     else break;
//   }

//   return !s.length
// };

var isValid = function (s) {
  let close = [];

  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let open = s[i];

    if (map[open]) {
      close.push(map[open]);
    } else if (open !== close.pop()) {
      return false;
    }
  }

  return !close.length;
};
