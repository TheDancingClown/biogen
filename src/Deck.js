class Deck {

  constructor() {
    this.discardPile = [];
  };

  _selectCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)];
  };

  _discardCard(card) {
    if(card) {
      this.discardPile.push(card);
    };
  };
};

export default Deck;
