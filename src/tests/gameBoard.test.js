/* eslint-disable no-undef */
import { shipContainer } from './ship.test';
import { gameBoardFactory } from '../modules/gameboard';

// Dumby Values for gameboard, will come from another module.
const gameboard = gameBoardFactory(shipContainer);
/// /////////////////////////////////////////////////////

test('checking gameboard objects ability to read coordinates for a ship', () => {
  expect(gameboard.shipContainer[0].shipsCoordinates).toEqual({
    0: 'A1',
    1: 'A2',
    2: 'A3',
    3: 'A4',
    4: 'A5',
  });
});

test('determine attack hit a ship', () => {
  expect(gameboard.attackShipAt('A1')).toStrictEqual([
    false,
    false,
    false,
    false,
    false,
  ]);
});

test('records attack that missed ship', () => {
  gameboard.attackShipAt('P5');
  gameboard.attackShipAt('K9');
  expect(gameboard.attackShipAt('M14')).toStrictEqual(['P5', 'K9', 'M14']);
});

test('checking if ALL ships have been sunk', () => {
  shipContainer[1].hitAtLocation(0);
  shipContainer[1].hitAtLocation(1);
  shipContainer[1].hitAtLocation(2);
  shipContainer[1].hitAtLocation(3);
  shipContainer[1].hitAtLocation(4);
  shipContainer[1].hitAtLocation(5);
  shipContainer[0].hitAtLocation(0);
  shipContainer[0].hitAtLocation(1);
  shipContainer[0].hitAtLocation(2);
  shipContainer[0].hitAtLocation(3);
  shipContainer[0].hitAtLocation(4);

  expect(gameboard.checkingIfAllShipsAreSunk()).toEqual(true);
});
