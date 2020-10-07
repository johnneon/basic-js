module.exports = function repeater(str, options) {
  class Repeater {
    constructor(str, options) {
      this.str = String(str);
      this.options = options;
      this.array = [];
    }

    repeatTimes() {
      let repeats = (!this.options.repeatTimes) ? 1 : this.options.repeatTimes;
      for (let i = 0; i < repeats; i++) {
        this.array.push(this.str);
      }
      return this.array;
    }

    addSeparator(arr) {
      let separator = (!this.options.separator) ? '+' : String(this.options.separator);
      return arr.join(separator);
    }

    convertToString(value) {
      if (typeof value == "undefined") return '';
      if (typeof value !== 'string') return String(value);
      return value;
    }

    createAddition() {
      let additionArray = [];
      let additionContent = this.convertToString(this.options.addition);
      let additionSeparator = (!this.options.additionSeparator) ? '|' : String(this.options.additionSeparator);
      let addTimes = (!this.options.additionRepeatTimes) ? 1 : options.additionRepeatTimes;

      for (let i = 0; i < addTimes; i++) {
        additionArray.push(additionContent);
      }

      return additionArray.join(additionSeparator);
    }

    addString(arr) {
      this.array = arr.map(element => element + this.createAddition());
    }

    showResult() {
      this.repeatTimes();
      this.addString(this.array);
      return this.addSeparator(this.array);
    }

  }

  let result = new Repeater(str, options);
  return result.showResult();
};