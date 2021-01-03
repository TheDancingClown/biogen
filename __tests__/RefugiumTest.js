import Refugium from '../src/Refugium';

let refugium;
beforeEach(() => {
  refugium = new Refugium(999,'red','test',[],[],[],false,[]);
});

describe('assignBiont', () => {
  it('adds a player biont to the refugium', () => {
    refugium.assignBiont('blue');
    expect(refugium.bionts).toEqual(['blue'])
  });

  it('assigns additional bionts', () => {
    refugium.bionts=['blue'];
    refugium.assignBiont('red')
    expect(refugium.bionts).toEqual(['blue', 'red'])
  });
});

describe('destroyBiont', () => {
  it('destroys a biont', () => {
  refugium.bionts=['red']
  refugium.destroyBiont('red')
  expect(refugium.bionts).toEqual([])
  });

  it('destroys a biont', () => {
    refugium.bionts=['blue','red']
    refugium.destroyBiont('red')
    expect(refugium.bionts).toEqual(['blue'])
    });
});

describe('organise', () => {
  it('moves manna from disorganised to organised', () => {
    refugium.manna=['yellow']
    refugium.organise('yellow');
    expect(refugium.organisedManna).toEqual(['yellow']);
    expect(refugium.manna).toEqual([]);
  });

  it('moves manna from disorganised to organised', () => {
    refugium.manna=(['yellow', 'red'])
    refugium.organise('yellow');
    expect(refugium.organisedManna).toEqual(['yellow']);
    expect(refugium.manna).toEqual(['red']);
  });
});