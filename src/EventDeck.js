import Deck from './Deck';
import { HadeanEon, ArcheanEon, ProterozoicEon } from './CardList';

class EventDeck extends Deck {

  constructor(discardPile) {
    super();
    this.discardPile = discardPile
  };

  drawCard(round) {
    var card
    if (round < 3) {
      card = super._selectCard(HadeanEon)
    } else if (round < 10) {
      card = super._selectCard(ArcheanEon)
    } else if (round < 20) {
      card = super._selectCard(ProterozoicEon)
    } else {
      card = null
    }
    return card
  }

}

export default EventDeck;