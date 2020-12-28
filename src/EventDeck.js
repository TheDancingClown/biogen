import { Template, HadeanEon, ArcheanEon, ProterozoicEon } from './CardList';

class EventDeck {

  drawCard(round) {
    if (round < 3) {
      return this._selectCard(HadeanEon)
    } else if (round < 10) {
      return this._selectCard(ArcheanEon)
    } else if (round < 20) {
      return this._selectCard(ProterozoicEon)
    }
  }

  _selectCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)]
  }
}

export default EventDeck;