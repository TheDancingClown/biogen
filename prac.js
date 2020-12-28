array = [0,1,2,3]
list = [0,1,3]

let deck = {'discardPile': []}
deck.discardPile = [0,1,2,3];
console.log(deck.discardPile)
console.log([2,3].every((val) => deck.discardPile.includes(val)))
