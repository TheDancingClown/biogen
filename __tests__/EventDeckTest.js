import EventDeck from '../src/EventDeck';

const deck = new EventDeck();

it('draws a hadean card', () => {
  const card = deck.drawCard(1)
  expect(card.id).toBeGreaterThan(36)
  expect(card.id).toBeLessThan(43)
});

it('draws a archean card', () => {
  const card = deck.drawCard(4)
  expect(card.id).toBeGreaterThan(42)
  expect(card.id).toBeLessThan(50)
});

it('draws a proterozoic card', () => {
  const card = deck.drawCard(11)
  expect(card.id).toBeGreaterThan(49)
  expect(card.id).toBeLessThan(61)
});

it('will not draw a card', () => {
  const card = deck.drawCard(20)
  expect(card).toBe(undefined)
});



