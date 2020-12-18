import EraDeck from '../src/EraDeck';

const eraDeck = new EraDeck()

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(.1);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

it('draws a random event', () => {
  expect(eraDeck.draw('hadean')).toBe(37)
})