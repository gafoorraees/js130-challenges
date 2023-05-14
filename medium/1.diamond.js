class Diamond {
  static makeDiamond(letter) {
    let startingLetter = 'A'.charCodeAt();
    let endingLetter = letter.toUpperCase().charCodeAt();
    let distance = endingLetter - startingLetter;
    let space = 1;
    let topHalf = '';
    let bottomHalf = '';
    
    for (let idx = distance - 1; idx >= 0; idx -= 1) {
      topHalf += ' '.repeat(idx) + String.fromCharCode(endingLetter - idx) + ' '.repeat(space) + String.fromCharCode(endingLetter - idx) + ' '.repeat(idx) + '\n';
      space += 2;
    }

    space = space - 2
    
    for (let idx = 1; idx <= distance - 1; idx += 1) {
      space -= 2;
      bottomHalf += ' '.repeat(idx) + String.fromCharCode(endingLetter - idx) + ' '.repeat(space) + String.fromCharCode(endingLetter - idx) + ' '.repeat(idx) + '\n';
    }

    let diamond = ' '.repeat(distance) + 'A' + ' '.repeat(distance) + '\n' + topHalf  + bottomHalf + ' '.repeat(distance) + 'A' + ' '.repeat(distance) + '\n';

    return letter === 'A' ? 'A\n' : diamond;
  }
}

module.exports = Diamond;