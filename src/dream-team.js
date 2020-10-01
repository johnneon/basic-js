module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) && members.length != 0) {
    let encryption = [];
    for (let i = 0; i < members.length; i++) {
      if(typeof members[i] == 'string') {
        encryption.push(members[i].replace(/\s/g, '')[0].toUpperCase());
      }
    }
    return encryption.sort().join('');
  } else {
    return false;
  }
};