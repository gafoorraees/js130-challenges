class DNA {
  constructor(strandOne) {
    this.strandOne = strandOne;
  }

  hammingDistance(strandTwo) {
    let counter = 0;
    let shortStrand;
    let longStrand;
    
    if ((this.strandOne.length === 0 & strandTwo.length === 0) || (this.strandOne === strandTwo)) {
      return counter;
    }

    if (this.strandOne.length > strandTwo.length) {
      shortStrand = strandTwo;
      longStrand = this.strandOne;
    } else {
      shortStrand = this.strandOne;
      longStrand = strandTwo;
    }

    for (let idx = 0; idx < shortStrand.length; idx += 1) {
      if (shortStrand[idx] !== longStrand[idx]) {
        counter += 1;
      }
    }

    return counter;
  }
}

module.exports = DNA;