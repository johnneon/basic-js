const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1) {
      this.result = [];
      throw new Error();
    } else {
      this.result.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let finish = this.result.join('~~');
    this.result = [];
    return finish;
  }
};

module.exports = chainMaker;