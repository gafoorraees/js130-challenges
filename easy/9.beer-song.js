class BeerSong {
  static variations = {
    SINGULAR: "bottle of beer",
    PLURAL: "bottles of beer",
    TAKE_ONE: "Take one down and pass it around",
    WALL: "on the wall",
    ZERO: "No more bottles of beer on the wall, no more bottles of beer",
    ONE: "Take it down and pass it around, no more bottles of beer",
    BUY: "Go to the store and buy some more, 99 bottles of beer on the wall"
  }

  static verse(bottles) {
    if (bottles >= 3) {
      return `${bottles} ${BeerSong.variations['PLURAL']} ${BeerSong.variations['WALL']}, ${bottles} ${BeerSong.variations['PLURAL']}.\n` + 
             `${BeerSong.variations['TAKE_ONE']}, ${bottles - 1} ${BeerSong.variations['PLURAL']} ${BeerSong.variations['WALL']}.\n`;
    }

    if (bottles === 2) {
      return `${bottles} ${BeerSong.variations['PLURAL']} ${BeerSong.variations['WALL']}, ${bottles} ${BeerSong.variations['PLURAL']}.\n` + 
             `${BeerSong.variations['TAKE_ONE']}, ${bottles - 1} ${BeerSong.variations['SINGULAR']} ${BeerSong.variations['WALL']}.\n`;
    }

    if (bottles === 1) {
      return `${bottles} ${BeerSong.variations['SINGULAR']} ${BeerSong.variations['WALL']}, ${bottles} ${BeerSong.variations['SINGULAR']}.\n` + 
             `${BeerSong.variations['ONE']} ${BeerSong.variations['WALL']}.\n`;
    }

    if (bottles === 0) {
      return `${BeerSong.variations['ZERO']}.\n${BeerSong.variations['BUY']}.\n`;
    }
  }

  static verses(bottleStart, bottleEnd) {
    let multipleVerses = '';
    
    for (let currentBottle = bottleStart; currentBottle >= bottleEnd; currentBottle -= 1) {
      multipleVerses += this.verse(currentBottle);     
      if (currentBottle !== bottleEnd) {
        multipleVerses += '\n';
      }
    }

    return multipleVerses;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;