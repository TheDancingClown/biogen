import Dice from '../src/Dice';

const dice = new Dice();

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(.1);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});


it('rolls a random number between 1 - 6', () => {
  expect(dice.roll(1)).toEqual(expect.arrayContaining([1]))
});

it('rolls only valid number', () => {
  expect(dice.roll(6)).toEqual(expect.arrayContaining([1,1,1,1,1,1]))
});