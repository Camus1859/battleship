/* eslint-disable no-undef */
import { gameBoardFactory } from '../modules/gameboard';
import { shipFactory } from '../modules/ship';

const shipsLives = 4;
const ship = shipFactory(shipsLives);

const x = {
  coord1: 1,
  coord2: 'A',
  ship: {
    length: 4,
    hit(value) {
      for (let i = 0; i <= length; i++) {
        if (shipsLife[i] === false) continue;
        else {
          shipsLife[i] = true;
        }
      }
      shipsLife[value] = false;
      return shipsLife;
    },
    sunkShip() {
      if (shipsLife.every((value) => value === false)) {
        return 'sink';
      }
    },
  },
};

const y = gameBoardFactory(1, 'A', ship);

test('returns gameboard object with ship object and ships position', () => {
  expect(x.coord1).toEqual(y.coord1);
});

test('returns gameboard object with ship object and ships position', () => {
  expect(x.coord2).toEqual(y.coord2);
});

test('returns gameboard object with ship object and ships position', () => {
  expect(x.ship.length).toEqual(y.ship.length);
});
