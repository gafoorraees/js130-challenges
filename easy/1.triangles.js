class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    
    if (this.side1 === 0 || this.side2 === 0 || this.side3 === 0) {
      throw new error()
    }

    if ((this.side1 + this.side2 <= this.side3) || (this.side1 + this.side3 <= this.side2) || (this.side2 + this.side3 <= this.side1)) {
      throw new Error();
    }
  }

  kind() {
    if ((this.side1 === this.side2) && (this.side2 === this.side3)) {
      return 'equilateral';
    }

    if ((this.side1 === this.side2 && this.side1 !== this.side3) || (this.side1 === this.side3 && this.side1!== this.side2)
        || this.side2 === this.side3 && this.side2 !== this.side1) {
          return 'isosceles';
      }

    if ((this.side1 !== this.side2) && (this.side2 !== this.side3)) {
      return 'scalene';
    }
  }
}

module.exports = Triangle; 
