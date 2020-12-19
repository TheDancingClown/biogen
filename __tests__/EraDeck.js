import EraDeck from '../src/EraDeck';

const eraDeck = new EraDeck()

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(.01);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

it('draws a random hadean event', () => {
  expect(eraDeck.draw('hadean')).toBe(37)
})

it('draws a random archean event', () => {
  expect(eraDeck.draw('archean')).toBe(43)
})

it('draws a random proterozoic event', () => {
  expect(eraDeck.draw('proterozoic')).toBe(50)
})