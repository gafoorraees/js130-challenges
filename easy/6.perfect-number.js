/*
input: number
output: string

rules:
  -a number is perfect if its aliquot sum is equal to the original number
  -a number is abundant if its aliquot sum is greater than the original number
  -a number is deficient if its aliquot sum is less than the original number
  -an aliquot sum is the sum of a numbers positive divsors 
  -a positive divisor is a number that can be evenly divided into the target number
  with no remainder, excluding then umber itself.
  -prime numbers are always deficient since their only divisor is 1
  -negative numbers raise an error
  
algorithm:
  -declare a class PerfectNumber
  -define a method, classify that takes a number as an argument
  -if the input number is less than 0, raise an error
  -declare an empty array
  -declare a for loop with an index starting from 0
    -while the index is less than or equal to the input number, divide input by index
      -if the module is 0, push the index to the empty array
  -find the sum of the array, if less more or equivalent, return the appropriate string
  
*/

class PerfectNumber {
  static classify(num) {
    if (num < 0) {
      throw new Error();
    }

    let divisors = [];

    for (let idx = 0; idx < num; idx += 1) {
      if (num % idx === 0) {
        divisors.push(idx);
      }
    }

    let aliquotSum = divisors.reduce((currentNum, currentSum) => currentNum + currentSum)
    
    return aliquotSum < num ? 'deficient' : aliquotSum > num ? 'abundant' : 'perfect';
  }
}

module.exports = PerfectNumber;