module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  let month = ['winter', 'spring', 'summer', 'autumn'],
    result = '';
  date.toISOString();

  switch (date.getMonth()) {
    case 0:
    case 1:
    case 11:
      result = month[0];
      break;
    case 2:
    case 3:
    case 4:
      result = month[1];
      break;
    case 5:
    case 6:
    case 7:
      result = month[2];
      break;
    case 8:
    case 9:
    case 10:
      result = month[3];
      break;
  }
  return result;
};