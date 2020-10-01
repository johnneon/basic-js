module.exports = function countCats(matrix) {
  let count = 0,
      arr = matrix.flat(Infinity);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "^^") {
          count++;
        }
      }
  return count;
};
