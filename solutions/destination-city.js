/**
 * @param {string[][]} paths
 * @return {string}
 */

// Initial Solution
// var destCity = function (paths) {
//   let destinationA = paths.map((path) => path[0]);

//   return paths.filter((path) => !destinationA.includes(path[1]))[0][1];
// };

var destCity = function (paths) {
  const set = new Set();
  for (const path of paths) set.add(path[0]);
  for (const path of paths) {
    if (!set.has(path[1])) return path[1];
  }
};
