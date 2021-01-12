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

// shipContainer data
const shipContainerBlue = [];
const shipsLivesBlue1 = 4;
const shipsLivesBlue2 = 5;
const thisShipsCoordinatesBlue1 = {
  0: 6,
  1: 7,
  2: 8,
  3: 9,
  4: 10,
};
const thisShipsCoordinatesBlue2 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};
const shipBlue1 = shipFactory(shipsLivesBlue1, counter(), thisShipsCoordinatesBlue1);
const shipBlue2 = shipFactory(shipsLivesBlue2, counter() + 1, thisShipsCoordinatesBlue2);
shipContainerBlue.push(shipBlue1);
shipContainerBlue.push(shipBlue2);

// shipContainerB data
const shipContainerRed = [];
const shipsLivesRed1 = 5;
const shipsLivesRed2 = 4;
const thisShipsCoordinatesRed1 = {
  0: 30,
  1: 31,
  2: 32,
  3: 33,
  4: 34,
  5: 35,
};
const thisShipsCoordinatesRed2 = {
  0: 95,
  1: 96,
  2: 97,
  3: 98,
  4: 99,
};
const shipRed1 = shipFactory(shipsLivesRed1, counter() + 2, thisShipsCoordinatesRed1);
const shipRed2 = shipFactory(shipsLivesRed2, counter() + 3, thisShipsCoordinatesRed2);
shipContainerRed.push(shipRed1);
shipContainerRed.push(shipRed2);

/// //////////////////////////////////////////////////////

test('ships length returns a number === number passed in', () => {
  expect(shipContainerBlue[0].shipsLives).toEqual(shipsLivesBlue1);
});

test('ship sinks if all  indices are false', () => {
  expect(shipContainerBlue[0].sunkShip()).toEqual('sink');
});

export { shipContainerBlue, shipContainerRed };
