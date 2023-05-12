class Series {
  constructor(digits) {
    this.digits = digits;
  }
  
  slices(length) {
    if (length > this.digits.length) {
      throw new Error();
    }

    let digits = this.digits.split('').map(digit => Number(digit));
    let series = [];
    
    for (let idx = 0; idx <= this.digits.length - length; idx += 1) {
      let arr = digits.slice(idx, idx + length);
      series.push(arr);
    
    }

    return series;
  }
}

module.exports = Series;
