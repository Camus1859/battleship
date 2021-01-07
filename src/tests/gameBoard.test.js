/* eslint-disable no-undef */
import { gameBoardFactory } from '../modules/gameboard';
import { shipFactory } from '../modules/ship';

const shipsLives = 4;
const ship = shipFactory(shipsLives);
const locationXForShip = 1;
const locationYForShip = 'A';
const gameboard = gameBoardFactory(locationXForShip, locationYForShip, ship);

test('checking current gameboard objects ability to set coordinates for current ship', () => {
  expect(gameboard.shipAtCoordinateX).toEqual(1);
  expect(gameboard.shipAtCoordinateY).toEqual('A');
});

test('determine attack hit a ship', () => {
  expect(gameboard.receiveAttackAtCoordinates(1, 'A')).toBe('hit');
  expect(ship.hit(3)).toEqual([true, true, true, false, true]);
});

test('records attack that missed ship', () => {
  expect(gameboard.receiveAttackAtCoordinates(14, 'M')).toEqual([14, 'M']);
});

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
