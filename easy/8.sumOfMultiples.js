class SumOfMultiples {
  constructor() {
    this.set = arguments;
    this.defaultSet = [3, 5]
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num)
  }

  to(num) {
    let multiples = [];
    let set;
    
    if (this.set.length === 0) {
      set = this.defaultSet;
    } else {
      set = Array.from(this.set);
    }

    for (let setIdx = 0; setIdx < set.length; setIdx += 1) {
      let result = set[setIdx];
      for (let multiple = 1; result < num; multiple += 1) {
        let product = multiple * set[setIdx];
        if (!(multiples.includes(result))) {
          multiples.push(result);
        }
        
        result = product;
      }
    }

    return multiples.reduce((sum, currentNum) => sum += currentNum, 0);
  }
}

module.exports = SumOfMultiples;