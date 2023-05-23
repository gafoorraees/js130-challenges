class CustomSet {
  constructor(set = []) {
    this.set = set;
  }

  add(ele) {
    if (!(this.set.includes(ele))) {
      this.set.push(ele);
    }

    return this;
  }

  contains(ele) {
    return this.set.includes(ele);
  }

  difference(secondSet) {
    let differencesSet = this.set.filter(ele => !secondSet.set.includes(ele));
    return new CustomSet(differencesSet)
  }

  intersection(secondSet) {
    let intersectionalSet = this.set.filter(ele => secondSet.set.includes(ele));
    return new CustomSet(intersectionalSet);
  }

  union(secondSet) {
    let unionSet = new CustomSet(this.set);
    secondSet.set.forEach(ele => unionSet.add(ele));
    return unionSet;
  }
  isEmpty() {
    return this.set.length === 0;
  }

  isSubset(secondSet) {
    if (this.set.length === 0) {
      return true;
    }

    if (this.set.length > secondSet.set.length) {
      return false;

    }
    
    for (let idx = 0; idx < this.set.length; idx += 1) {
      if (!(secondSet.set.includes(this.set[idx]))) {
        return false;
      }
    }

    return true;
  }

  isDisjoint(secondSet) {
    for (let idx = 0; idx < this.set.length; idx += 1) {
      if (secondSet.set.includes(this.set[idx])) {
        return false;
      }
    }

    return true;
  }

  isSame(secondSet) {
   if (this.set.length !== secondSet.set.length) {
    return false;
   }

   return this.isSubset(secondSet);
  }
}

module.exports = CustomSet;