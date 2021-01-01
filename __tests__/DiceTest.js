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

it('returns zeros for an empty array', () => {
  expect(dice._countAndFormatResults([])).toEqual({'one':0, 'two':0, 'three':0, 'four':0, 'five':0, 'six':0})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1]
  expect(dice._countAndFormatResults(roll)).toEqual({'one':1, 'two':0, 'three':0, 'four':0, 'five':0, 'six':0})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1,1,1,1]
  expect(dice._countAndFormatResults(roll)).toEqual({'one':4, 'two':0, 'three':0, 'four':0, 'five':0, 'six':0})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1,2,3,4,5,6]
  expect(dice._countAndFormatResults(roll)).toEqual({'one':1, 'two':1, 'three':1, 'four':1, 'five':1, 'six':1})
});

it('counts an array of number and returns an object of results', () => {
  let roll = [1,1,3,2,1,6]
  expect(dice._countAndFormatResults(roll)).toEqual({'one':3, 'two':1, 'three':1, 'four':0, 'five':0, 'six':1})
});
