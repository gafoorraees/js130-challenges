/*
input: string
output: number

rules:
  -octal numbers use a base of 8
  if inoput is invalid, treat it as octal 0


algorithm:
  declare a class Octal
  -define a constructor that takes a string as an argument
  -declare a toDecimal method
  -define a sum variable initialized to 0
  -multiply the current number by 8 raised to the power of its index.
  -reverse the input string
  -declare a for loop. set the index to 0, condition to length of the reversed string
    -convert the current element to a number, multiply it by 8, raise it to power of current index
      -add it to the sum
  return sum

  -declare a validty method
    -if input includes 8 or 9, it is invalid, return  0;
    -if input includes letters, it is invalid return 0;
    -
*/

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