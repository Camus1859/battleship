/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import { shipFactory } from '../modules/ship';

// Dumby values for ship lives, ship-id, countainer data, ships-coordinates will come from another module.
const counter = () => {
  let count = 0;
  return function () {
    return counter++;
  };
};
const shipContainer = [];
const shipsLives = 4;
const shipsLivesB = 5;
const thisShipsCoordinates = {
  0: 'A1',
  1: 'A2',
  2: 'A3',
  3: 'A4',
  4: 'A5',
};
const thisShipsCoordinates2 = {
  0: 'B1',
  1: 'B2',
  2: 'B3',
  3: 'B4',
  4: 'B5',
  5: 'B6',
};
const ship = shipFactory(shipsLives, counter(), thisShipsCoordinates);
const shipB = shipFactory(shipsLivesB, counter(), thisShipsCoordinates2);
shipContainer.push(ship);
shipContainer.push(shipB);
/// //////////////////////////////////////////////////////

test('ships length returns a number === number passed in', () => {
  expect(shipContainer[0].shipsLives).toEqual(shipsLives);
});

test('returns an array length === lenth property and displays ships lives as "true" or hiits as "false"', () => {
  expect(shipContainer[0].hitAtLocation(0)).toEqual([false, true, true, true, true]);
});

test('returns ', () => {
  shipContainer[0].hitAtLocation(1);
  shipContainer[0].hitAtLocation(2);
  shipContainer[0].hitAtLocation(3);
  expect(shipContainer[0].hitAtLocation(4)).toEqual([false, false, false, false, false]);
});

test('ship sinks if all  indices are false', () => {
  expect(shipContainer[0].sunkShip()).toEqual('sink');
});

export { shipContainer };
