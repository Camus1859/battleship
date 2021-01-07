/* eslint-disable import/prefer-default-export */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import { shipFactory } from '../modules/ship';

// Dumby values for ship lives, ship-id, countainer data, will come from another module.
const counter = () => {
  let count = 0;
  return function () {
    return counter++;
  };
};
const shipContainer = [];
const shipsLives = 4;
const shipsLivesB = 5;
const ship = shipFactory(shipsLives, counter());
const shipB = shipFactory(shipsLivesB, counter());
shipContainer.push(ship);
shipContainer.push(shipB);
/// //////////////////////////////////////////////////////

test('ships length returns a number === number passed in', () => {
  expect(shipContainer[0].length).toEqual(shipsLives);
});

test('returns an array length === lenth property and displays ships lives as "true" or hits as "false"', () => {
  expect((shipContainer[0].hit(0))).toEqual([false, true, true, true, true]);
});

test('returns ', () => {
  shipContainer[0].hit(1);
  shipContainer[0].hit(2);
  shipContainer[0].hit(3);
  expect(shipContainer[0].hit(4)).toEqual([false, false, false, false, false]);
});

test('ship sinks if all  indices are false', () => {
  expect(shipContainer[0].sunkShip()).toEqual('sink');
});

export {
  shipContainer,
};
