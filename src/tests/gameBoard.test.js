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
  expect(gameboard.attackShipAt('A1')).toStrictEqual([false, false, false, false, false]);
});

test('records attack that missed ship', () => {
  gameboard.attackShipAt('P5');
  gameboard.attackShipAt('K9');
  expect(gameboard.attackShipAt('M14')).toStrictEqual(['P5', 'K9', 'M14']);
});

// test('checking if all checks have been sunk', () => {

// });

// Unnecassary Code!
// const x = {
//   coordinate1: 1, //dumby data
//   coordinate2: 'A', //dumby data
//   ship: {
//     length: 4,//dumby data
//     hit(value) {
//       for (let i = 0; i <= length; i++) {
//         if (shipsLife[i] === false) continue;
//         else {
//           shipsLife[i] = true;
//         }
//       }
//       shipsLife[value] = false;
//       return shipsLife;
//     },
//     sunkShip() {
//       if (shipsLife.every((value) => value === false)) {
//         return 'sink';
//       }
//     },
//   },
// };

// Unnecassary Code!
// test('checking current gameboard ships length ', () => {
//   expect(x.ship.length).toEqual(gameboard.ship.length);
// });

// test('checking affects of current gameboard ships hit method', () => {
//   expect(gameboard.ship.hit(1)).toEqual([true, false, true, true, true]);
// });

// test('checking affects of current gameboards ships sunkship method(when all ship lives are hit)', () => {
//   gameboard.ship.hit(0);
//   gameboard.ship.hit(2);
//   gameboard.ship.hit(3);
//   gameboard.ship.hit(4);
//   expect(gameboard.ship.sunkShip()).toEqual('sink');
// });
