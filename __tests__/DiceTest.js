import Dice from '../src/Dice';

const dice = new Dice();

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(.1);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});


it('rolls a random number between 1 - 6', () => {
  expect(dice._listRoll(1)).toEqual(expect.arrayContaining([1]))
});

it('rolls only valid number', () => {
  expect(dice._listRoll(6)).toEqual(expect.arrayContaining([1,1,1,1,1,1]))
});

it('rolls no dice', () => {
  expect(dice._listRoll()).toEqual([])
});

it('returns zeros for an empty array', () => {
  expect(dice._countAndFormatResults([])).toEqual({1:0, 2:0, 3:0, 4:0, 5:0, 6:0})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1]
  expect(dice._countAndFormatResults(roll)).toEqual({1:1, 2:0, 3:0, 4:0, 5:0, 6:0})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1,1,1,1]
  expect(dice._countAndFormatResults(roll)).toEqual({1:4, 2:0, 3:0, 4:0, 5:0, 6:0})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1,2,3,4,5,6]
  expect(dice._countAndFormatResults(roll)).toEqual({1:1, 2:1, 3:1, 4:1, 5:1, 6:1})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1,1,3,2,1,6]
  expect(dice._countAndFormatResults(roll)).toEqual({1:3, 2:1, 3:1, 4:0, 5:0, 6:1})
});
