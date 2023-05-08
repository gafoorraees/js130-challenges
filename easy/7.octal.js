class Octal {
  constructor(input) {
    this.input = input;
  }

  toDecimal() {    
    if (this.input.includes('8') || this.input.includes('9')) {
      return 0;
    }

    if (this.input.includes(this.input.match(/[A-Za-z]/))) {
      return 0;
    }

    let numbers = this.input.split('').reverse();
    let decimalSum = 0;

    for (let idx = 0; idx < numbers.length; idx += 1) {
      let exponentResult = Math.pow(8, idx);
      decimalSum += exponentResult * Number(numbers[idx]);
    }

    return decimalSum;
  }
}

module.exports = Octal;
