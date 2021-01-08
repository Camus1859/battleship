/* eslint-disable no-undef */
import { shipContainerBlue, shipContainerRed } from './ship.test';

import { gameBoardFactory } from '../modules/gameboard';

// Dumby Values for gameboard, will come from another module.
const gameboardBlue = gameBoardFactory(shipContainerBlue);

const gameboardRed = gameBoardFactory(shipContainerRed);
/// /////////////////////////////////////////////////////

test('checking gameboard objects ability to read coordinates for a ship', () => {
  expect(gameboardBlue.shipContainer[0].shipsCoordinates).toEqual({
    0: 'A1',
    1: 'A2',
    2: 'A3',
    3: 'A4',
    4: 'A5',
  });
});

test('determine attack hit a ship', () => {
  expect(gameboardBlue.attackTheBoardAt('A1')).toStrictEqual([
    false,
    false,
    false,
    false,
    false,
  ]);
});

test('records attack that missed ship', () => {
  gameboardBlue.attackTheBoardAt('P5');
  gameboardBlue.attackTheBoardAt('K9');
  expect(gameboardBlue.attackTheBoardAt('M14')).toStrictEqual(['P5', 'K9', 'M14']);
});

test('checking if ALL ships have been sunk', () => {
  shipContainerBlue[1].hitTheShipAtThisIndex(0);
  shipContainerBlue[1].hitTheShipAtThisIndex(1);
  shipContainerBlue[1].hitTheShipAtThisIndex(2);
  shipContainerBlue[1].hitTheShipAtThisIndex(3);
  shipContainerBlue[1].hitTheShipAtThisIndex(4);
  shipContainerBlue[1].hitTheShipAtThisIndex(5);
  shipContainerBlue[0].hitTheShipAtThisIndex(0);
  shipContainerBlue[0].hitTheShipAtThisIndex(1);
  shipContainerBlue[0].hitTheShipAtThisIndex(2);
  shipContainerBlue[0].hitTheShipAtThisIndex(3);
  shipContainerBlue[0].hitTheShipAtThisIndex(4);

  expect(gameboardBlue.checkingIfAllShipsAreSunk()).toEqual(true);
});

test('checking if ALL ships have been sunk, (1 life for 1 ship remains)', () => {
  // shipContainerRed[1].hitTheShipAtThisIndex(0);
  shipContainerRed[1].hitTheShipAtThisIndex(1);
  shipContainerRed[1].hitTheShipAtThisIndex(2);
  shipContainerRed[1].hitTheShipAtThisIndex(3);
  shipContainerRed[1].hitTheShipAtThisIndex(4);
  shipContainerRed[1].hitTheShipAtThisIndex(5);
  shipContainerRed[0].hitTheShipAtThisIndex(0);
  shipContainerRed[0].hitTheShipAtThisIndex(1);
  shipContainerRed[0].hitTheShipAtThisIndex(2);
  shipContainerRed[0].hitTheShipAtThisIndex(3);
  shipContainerRed[0].hitTheShipAtThisIndex(4);

  expect(gameboardRed.checkingIfAllShipsAreSunk()).toEqual(false);
});
