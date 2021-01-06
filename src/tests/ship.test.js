/* eslint-disable no-undef */
import { shipFactory } from '../modules/ship';

const num = 4;

const ship = shipFactory(num);

test('ships length returns a number === number passed in', () => {
  expect(ship.length).toEqual(num);
});

test('returns an array length === lenth property and displays ships lives as "true" or hits as "false"', () => {
  expect(ship.hit(0)).toEqual([false, true, true, true, true]);
});

test('returns ', () => {
   ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.hit(4)).toEqual([false, false, false, false, false]);
});

test('ship sinks if all  indices are false', () => {
  expect(ship.sunkShip()).toEqual('sink');
});


