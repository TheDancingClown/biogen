class Deck {

  constructor() {
    this.discardPile = [0];
  };

  _selectCard(deck) {
    let card = {"id": 0};
    while(this.discardPile.includes(card.id)) {
      card = deck[Math.floor(Math.random() * deck.length)];
    }
    return card
  };

  _discardCard(card) {
    if(card) {
      this.discardPile.push(card.id);
    };
  };
};

export default Deck;
