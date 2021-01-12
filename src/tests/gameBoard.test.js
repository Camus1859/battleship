/* eslint-disable no-undef */
import { shipContainerBlue, shipContainerRed } from './ship.test';
import { gameBoardFactory } from '../modules/gameboard';

// Dumby Values for gameboard, will come from another module.
const gameBoardRed = gameBoardFactory(shipContainerRed);
const gameBoardBlue = gameBoardFactory(shipContainerBlue);
/// /////////////////////////////////////////////////////

test('checking gameboard objects ability to read coordinates for a ship', () => {
  expect(gameBoardBlue.shipContainer[0].shipsCoordinates).toEqual({
    0: 6,
    1: 7,
    2: 8,
    3: 9,
    4: 10,
  });
});

test('determine attack hit a ship', () => {
  expect(gameBoardBlue.attackTheBoardAt(6)).toStrictEqual([
    false,
    true,
    true,
    true,
    true,
  ]);
});

test('records attack that missed ship', () => {
  gameBoardBlue.attackTheBoardAt(50);
  gameBoardBlue.attackTheBoardAt(51);
  gameBoardBlue.attackTheBoardAt(52);
  expect(gameBoardBlue.getMissedShots()).toStrictEqual([50, 51, 52]);
});

export { gameBoardBlue, gameBoardRed };
