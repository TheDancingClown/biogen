class Dice {

  roll(number) {
    var dice_rolls = []
    dice_rolls.push(~~(Math.random() * 6) + 1)
    return dice_rolls
  }
}

export default Dice;