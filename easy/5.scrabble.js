class Scrabble {
  constructor(word) {
    this.word = word;
  }

  static TILE_SCORES = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  }

  static score(word) {
    let letters = new Scrabble(word);
    return letters.score();
  }

  score() {
    let counter = 0;

    if (this.word === null) {
      return counter;
    }

    for (let key in Scrabble.TILE_SCORES) {
      let letters = Scrabble.TILE_SCORES[key];
      
      letters.forEach(letter => {
        this.word.toUpperCase().split('').forEach(char => {
          if (char === letter) {
            counter += Number(key);
          }
        });
      });
    }
      
    return counter;
  }
}

module.exports = Scrabble;