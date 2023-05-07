class RomanNumeral {
  constructor(arabicNumeral) {
    this.arabicNumeral = arabicNumeral;
  }

  static ROMANS = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  }

  toRoman() {
    let arabicString = String(this.arabicNumeral);

    if (arabicString.length === 1) {
      return this.fromOnes(this.arabicNumeral);
    } else if (arabicString.length === 2) {
      return this.fromTens(Number(arabicString[0])) + this.fromOnes(Number(arabicString[1]));
    } else if (arabicString.length === 3) {
      return this.fromHundreds(Number(arabicString[0])) + this.fromTens(Number(arabicString[1])) + this.fromOnes(Number(arabicString[2]));
    } else {
      return this.fromThousands(Number(arabicString[0])) + this.fromHundreds(Number(arabicString[1])) + this.fromTens(Number(arabicString[2])) + this.fromOnes(Number(arabicString[3]));
    }
  }


  fromOnes(num) {
    let romanNum = '';

    if (num <= 3) {
      romanNum += RomanNumeral.ROMANS['1'].repeat(num);
    } else if (num === 4) {
      romanNum += RomanNumeral.ROMANS['4'];
    } else if (num === 5) {
      romanNum += RomanNumeral.ROMANS['5'];
    } else if (num >= 6 && num <= 8) {
      romanNum += RomanNumeral.ROMANS['5'] + RomanNumeral.ROMANS['1'].repeat(num - 5);
    } else {
      romanNum += RomanNumeral.ROMANS['9'];
    }

    return romanNum;
  }

  fromTens(num) {
    let romanNum = '';

    if (num <= 3) {
      romanNum += RomanNumeral.ROMANS['10'].repeat(num);
    } else if (num === 4) {
      romanNum += RomanNumeral.ROMANS['40'];
    } else if (num === 5) {
      romanNum += RomanNumeral.ROMANS['50'];
    } else if (num >= 6 && num <= 8) {
      romanNum += RomanNumeral.ROMANS['50'] + RomanNumeral.ROMANS['10'].repeat(num - 5);
    } else {
      romanNum += RomanNumeral.ROMANS['90'];
    }

    return romanNum;
  }

  fromHundreds(num) {
    let romanNum = '';

    if (num <= 3) {
      romanNum += RomanNumeral.ROMANS['100'].repeat(num);
    } else if (num === 4) {
      romanNum += RomanNumeral.ROMANS['400'];
    } else if (num === 5) {
      romanNum += RomanNumeral.ROMANS['500'];
    } else if (num >= 6 && num <= 8) {
      romanNum += RomanNumeral.ROMANS['500'] + RomanNumeral.ROMANS['100'].repeat(num - 5);
    } else {
      romanNum += RomanNumeral.ROMANS['900'];
    }

    return romanNum;
  }

  fromThousands(num) {
    return RomanNumeral.ROMANS['1000'].repeat(num);
  }
}

module.exports = RomanNumeral;