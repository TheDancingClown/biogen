class Deck {

  constructor() {
    this.discardPile = [];
  };

  _selectCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)]
  }

}

export default Deck;
