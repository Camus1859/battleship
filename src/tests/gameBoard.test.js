/* eslint-disable no-undef */
import { shipContainerBlue, shipContainerRed } from './ship.test';
import { gameBoardFactory } from '../modules/gameboard';

// Dumby Values for gameboard, will come from another module.
const gameBoardRed = gameBoardFactory(shipContainerRed);
const gameBoardBlue = gameBoardFactory(shipContainerBlue);
/// /////////////////////////////////////////////////////

test('checking gameboard objects ability to read coordinates for a ship', () => {
  expect(gameBoardBlue.shipContainer[0].shipsCoordinates).toEqual({
    0: 'A1',
    1: 'A2',
    2: 'A3',
    3: 'A4',
    4: 'A5',
  });
});

test('determine attack hit a ship', () => {
  expect(gameBoardBlue.attackTheBoardAt('A1')).toStrictEqual([
    false,
    true,
    true,
    true,
    true,
  ]);
});

test('records attack that missed ship', () => {
  gameBoardBlue.attackTheBoardAt('P5');
  gameBoardBlue.attackTheBoardAt('K9');
  expect(gameBoardBlue.attackTheBoardAt('M14')).toStrictEqual(['P5', 'K9', 'M14']);
});

export {
  gameBoardBlue,
  gameBoardRed,
};
