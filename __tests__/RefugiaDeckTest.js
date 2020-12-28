import RefugiaDeck from '../src/RefugiaDeck';

let deck, card, refugium

beforeEach(() => {
  deck = new RefugiaDeck();
});

describe('heaven event', () => {
  describe('all active landforms', () => {
    beforeEach(() => {
      card = {"landform": {"cosmic": true, "oceanic": true, "coastal": true, "continental": true}};
    });
    it('draws a cosmic landform as first priority', () => {
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(0);
      expect(refugium.id).toBeLessThan(4);
      expect(deck.cosmicRefugia.length).toBe(1);
    });

    it('draws a oceanic landform when cosmic deck empty', () => {
      deck.cosmicRefugia = [1,2,3];
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(3);
      expect(refugium.id).toBeLessThan(7);
      expect(deck.oceanicRefugia.length).toBe(1);
    });

    it('draws a coastal landform when oceanic deck empty', () => {
      deck.cosmicRefugia = [1,2,3];
      deck.oceanicRefugia = [1,2,3];
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(6);
      expect(refugium.id).toBeLessThan(12);
      expect(deck.coastalRefugia.length).toBe(1);
    });

    it('draws a continental landform when coastal deck empty', () => {
      deck.cosmicRefugia = [1,2,3];
      deck.oceanicRefugia = [1,2,3];
      deck.coastalRefugia = [1,2,3,4,5];
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(11);
      expect(refugium.id).toBeLessThan(17);
      expect(deck.continentalRefugia.length).toBe(1);
    });

    it('does not draw a card when all decks are empty', () => {
      deck.cosmicRefugia = [1,2,3];
      deck.oceanicRefugia = [1,2,3];
      deck.coastalRefugia = [1,2,3,4,5];
      deck.continentalRefugia = [1,2,3,4,5];
      refugium = deck.heaven(card);
      expect(refugium).toBe(undefined)
    });
  });
  describe('inactive landforms', () => {

    it('draws a oceanic landform as second priority', () => {
      card = {"landform": {"cosmic": false, "oceanic": true, "coastal": true, "continental": true}};
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(3);
      expect(refugium.id).toBeLessThan(7);
      expect(deck.oceanicRefugia.length).toBe(1);
    });

    it('draws a coastal landform as third priority', () => {
      card = {"landform": {"cosmic": false, "oceanic": false, "coastal": true, "continental": true}};
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(6);
      expect(refugium.id).toBeLessThan(12);
      expect(deck.coastalRefugia.length).toBe(1);
    });

    it('draws a continental landform as fourth priority', () => {
      card = {"landform": {"cosmic": false, "oceanic": false, "coastal": false, "continental": true}};
      refugium = deck.heaven(card);
      expect(refugium.id).toBeGreaterThan(11);
      expect(refugium.id).toBeLessThan(17);
      expect(deck.continentalRefugia.length).toBe(1);
    });

    it('does not draw a card when all landforms are inactive', () => {
      card = {"landform": {"cosmic": false, "oceanic": false, "coastal": false, "continental": false}};
      refugium = deck.heaven(card);
      expect(refugium).toBe(undefined)
    });
  });
});

describe('earth event', () => {
  describe('all active landforms', () => {
    beforeEach(() => {
      card = {"landform": {"cosmic": true, "oceanic": true, "coastal": true, "continental": true}};
    });

    it('draws a continental landform as first priority', () => {
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(11);
      expect(refugium.id).toBeLessThan(17);
      expect(deck.continentalRefugia.length).toBe(1);
    });
    it('draws a coastal card when continental deck is empty', () =>{
      deck.continentalRefugia = [1,2,3,4,5];
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(6);
      expect(refugium.id).toBeLessThan(12);
      expect(deck.coastalRefugia.length).toBe(1);
    });
    it('draws an oceanic card when coastal deck is empty', () =>{
      deck.continentalRefugia = [1,2,3,4,5];
      deck.coastalRefugia = [1,2,3,4,5];
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(3);
      expect(refugium.id).toBeLessThan(7);
      expect(deck.oceanicRefugia.length).toBe(1);
    });
    it('draws a cosmic card when oceanic deck is empty', () =>{
      deck.continentalRefugia = [1,2,3,4,5];
      deck.coastalRefugia = [1,2,3,4,5];
      deck.oceanicRefugia = [1,2,3];
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(0);
      expect(refugium.id).toBeLessThan(4);
      expect(deck.cosmicRefugia.length).toBe(1);
    });

    it('does not draw a card when all decks are empty', () => {
      deck.cosmicRefugia = [1,2,3];
      deck.oceanicRefugia = [1,2,3];
      deck.coastalRefugia = [1,2,3,4,5];
      deck.continentalRefugia = [1,2,3,4,5];
      refugium = deck.earth(card);
      expect(refugium).toBe(undefined)
    });
  });

  describe('inactive landforms', () => {

    it('draws a coastal landform as second priority', () => {
      card = {"landform": {"cosmic": true, "oceanic": true, "coastal": true, "continental": false}};
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(6);
      expect(refugium.id).toBeLessThan(12);
      expect(deck.coastalRefugia.length).toBe(1);
    });

    it('draws a oceanic landform as third priority', () => {
      card = {"landform": {"cosmic": true, "oceanic": true, "coastal": false, "continental": false}};
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(3);
      expect(refugium.id).toBeLessThan(7);
      expect(deck.oceanicRefugia.length).toBe(1);
    });

    it('draws a cosmic landform as fourth priority', () => {
      card = {"landform": {"cosmic": true, "oceanic": false, "coastal": false, "continental": false}};
      refugium = deck.earth(card);
      expect(refugium.id).toBeGreaterThan(0);
      expect(refugium.id).toBeLessThan(4);
      expect(deck.cosmicRefugia.length).toBe(1);
    });
    it('does not draw a card when all landforms are inactive', () => {
      card = {"landform": {"cosmic": false, "oceanic": false, "coastal": false, "continental": false}};
      refugium = deck.earth(card);
      expect(refugium).toBe(undefined)
    });
  });
});

describe('smite event', () => {
  it('with no enzymes and no organised manna, it destroys disorganised manna', () => {
    refugium = {"manna": [1, 2, 3]};
    deck.cosmicRefugia = [refugium];
    deck.smite();
    expect(refugium.manna).toEqual([2, 3])
  });

  it('destroys disorganised manna of each refugium', () => {
    refugium = {"manna": [1, 2, 3]};
    let refugium2 = {"manna": [4, 5, 6]};
    deck.cosmicRefugia = [refugium, refugium2];
    deck.smite();
    expect(refugium.manna).toEqual([2, 3]);
    expect(refugium2.manna).toEqual([5, 6]);
  });

  it('destroys disorganised manna of each refugium in each landform', () => {
    refugium = {"manna": [1, 2, 3]};
    let refugium2 = {"manna": [4, 5, 6]};
    let refugium3 = {"manna": [7, 8, 9]};
    let refugium4 = {"manna": [10, 11, 12]};
    deck.cosmicRefugia = [refugium];
    deck.oceanicRefugia = [refugium2];
    deck.coastalRefugia = [refugium3];
    deck.continentalRefugia = [refugium4]
    deck.smite();
    expect(refugium.manna).toEqual([2, 3]);
    expect(refugium2.manna).toEqual([5, 6]);
    expect(refugium3.manna).toEqual([8, 9]);
    expect(refugium4.manna).toEqual([11, 12]);
  });

  it('destroys the refugia when all manna is destroyed', () => {
    refugium = {"manna": [1], "organisedManna": []};
    deck.cosmicRefugia = [refugium];
    deck.smite();
    expect(deck.cosmicRefugia.length).toBe(0);
  });
});
