module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return arr;
  let result = arr.slice();
  for (let i = 0; i < result.length; i++) {
      if (typeof result[i] === 'string') {
          if (result[i] === '--discard-next') {
            delete result[i];
            delete result[i + 1];
          }
          else if (result[i] === '--discard-prev') {
            delete result[i];
            delete result[i - 1];
          }
          else if (result[i] === '--double-next') {
              delete result[i];
              result.splice(i + 1, 0, result[i + 1]);
          } else if (result[i] === '--double-prev') {
              delete result[i];
              result.splice(i, 0, result[i - 1]);
              i++;
          }
      }
  }
  return result.filter(el => el !== undefined);
};
