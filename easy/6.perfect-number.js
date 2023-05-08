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
