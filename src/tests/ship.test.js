/* eslint-disable no-undef */
import { shipFactory } from '../modules/ship';

const num = 5;

const ship = shipFactory(num);

test('ships length returns a number >= 0', () => {
  expect(ship.length).toEqual(num);
});

test('ships location of hit returns a number >0 && <5', () => {
  expect(ship.hit(3)).toEqual([true, true, true, false, true]);
});

test('ships location of hit returns a number >0 && <5', () => {
  ship.hit(2);
  expect(ship.hit(3)).toEqual([true, true, false, false, true]);
});



// test('ship sinks if length is === 0', () => {
//   expect(ship.sunkShip()).toEqual('game over');
// });
