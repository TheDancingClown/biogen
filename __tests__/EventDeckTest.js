import EventDeck from '../src/EventDeck';

let card, deck;
beforeEach(() => {
  deck = new EventDeck([0]);
});

describe('the first 3 rounds', () => {
  it('draws a hadean card', () => {
    card = deck.drawCard(1)
    expect(card.id).toBeGreaterThan(36)
    expect(card.id).toBeLessThan(43)
  });

  it('will not draw a duplicate', () => {
    deck.discardPile = [0,37,38,39,40,41]
    card = deck.drawCard(1)
    expect(card.id).toBe(42)
  });
});

describe('rounds 4 to 10', () => {
  it('draws a archean card', () => {
    card = deck.drawCard(4)
    expect(card.id).toBeGreaterThan(42)
    expect(card.id).toBeLessThan(50)
  });
});

describe('rounds 11 to 19', () => {
  it('draws a proterozoic card', () => {
    card = deck.drawCard(11)
    expect(card.id).toBeGreaterThan(49)
    expect(card.id).toBeLessThan(61)
  });
});

describe('end of game', () => {
    it('will not draw a card', () => {
    card = deck.drawCard(20)
    expect(card).toBe(null)
  });
});





