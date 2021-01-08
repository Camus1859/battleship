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
  expect(gameboardBlue.attackShipAt('A1')).toStrictEqual([
    false,
    false,
    false,
    false,
    false,
  ]);
});

test('records attack that missed ship', () => {
  gameboardBlue.attackShipAt('P5');
  gameboardBlue.attackShipAt('K9');
  expect(gameboardBlue.attackShipAt('M14')).toStrictEqual(['P5', 'K9', 'M14']);
});

test('checking if ALL ships have been sunk', () => {
  shipContainerBlue[1].hitAtLocation(0);
  shipContainerBlue[1].hitAtLocation(1);
  shipContainerBlue[1].hitAtLocation(2);
  shipContainerBlue[1].hitAtLocation(3);
  shipContainerBlue[1].hitAtLocation(4);
  shipContainerBlue[1].hitAtLocation(5);
  shipContainerBlue[0].hitAtLocation(0);
  shipContainerBlue[0].hitAtLocation(1);
  shipContainerBlue[0].hitAtLocation(2);
  shipContainerBlue[0].hitAtLocation(3);
  shipContainerBlue[0].hitAtLocation(4);

  expect(gameboardBlue.checkingIfAllShipsAreSunk()).toEqual(true);
});
