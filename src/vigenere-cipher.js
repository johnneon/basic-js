class VigenereCipheringMachine {
  constructor(reverse) {
    if (reverse === false) this.reverse = false;
    else this.reverse = true;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.len = this.alphabet.length;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyArray = [];
    let shift = 0;

    for (let i = 0; i < message.length; i++) {
      let order = this.alphabet.indexOf(message[i]);
      let keyNumber = null;
      if (order === -1) {
        keyNumber = message[i];
        shift++;
      } else {
        keyNumber = key[(i - shift) % key.length];
      }
      keyArray.push(keyNumber);
    }

    for (let j = 0; j < message.length; j++) {
      let num = this.alphabet.indexOf(message[j]);
      let letter;
      if (num === -1) letter = message[j]
      else {
        letter = this.alphabet[(this.alphabet.indexOf(message[j]) + this.alphabet.indexOf(keyArray[j])) % this.len];
      }
      result += letter;
    }

    if (!this.reverse) return result.split('').reverse().join('');
    return result;
  }
  
  decrypt(message, key) {
    if (!message || !key) throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyArray = [];
    let shift = 0;

    for (let i = 0; i < message.length; i++) {
      let order = this.alphabet.indexOf(message[i]);
      let keyNumber = null;
      if (order === -1) {
        keyNumber = message[i];
        shift++;
      } else keyNumber = key[(i - shift) % key.length];
      keyArray.push(keyNumber);
    }

    for (let j = 0; j < message.length; j++) {
      let num = this.alphabet.indexOf(message[j]);
      let letter;
      if (num === -1) {
        letter = message[j];
      }
      else {
        letter = this.alphabet[(this.alphabet.indexOf(message[j]) - this.alphabet.indexOf(keyArray[j]) + this.len) % this.len];
      }
      result += letter;
    }

    if (!this.reverse) return result.split('').reverse().join('');
    return result;
  }
}
module.exports = VigenereCipheringMachine;