class Dice {

  roll(number) {
    return this._countAndFormatResults(this._listRoll(number))
  }

  _listRoll(number) {
    var dice_rolls = [];
    for (let i = 0; i < number; i ++) {
      dice_rolls.push(~~(Math.random() * 6) + 1);
    };
    return dice_rolls;
  };

  _countAndFormatResults(roll) {
    var ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0;
    for(let number of roll) {
      if(number == 1) {
        ones ++
      } else if (number === 2) {
        twos ++
      } else if (number === 3) {
        threes ++
      } else if (number === 4) {
        fours ++
      } else if (number === 5) {
        fives ++
      } else if (number === 6) {
        sixes ++
      };
    };
    return {1: ones, 2: twos, 3: threes, 4: fours, 5: fives, 6: sixes}
  };
}

export default Dice;