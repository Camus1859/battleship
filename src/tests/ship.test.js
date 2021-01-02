/* eslint-disable no-undef */
import { shipFactory } from '../modules/ship';

const ship = shipFactory();

test('shipsLength returns a number >= 0', () => {
  expect(ship.shipsLength(2)).toBeGreaterThanOrEqual(0);
});

test('ships location of hit returns a number >0 && <5', () => {
  const hitNumber = Math.floor(Math.random() * 5);
  expect(ship.locationOfHit(hitNumber)).toBeLessThanOrEqual(4);
});

test('ship sinks if length is === 0', () => {
  expect(ship.sunkShip()).toEqual('game over');
});
