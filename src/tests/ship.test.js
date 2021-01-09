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
  0: 'A1',
  1: 'A2',
  2: 'A3',
  3: 'A4',
  4: 'A5',
};
const thisShipsCoordinatesBlue2 = {
  0: 'B1',
  1: 'B2',
  2: 'B3',
  3: 'B4',
  4: 'B5',
  5: 'B6',
};
const shipBlue1 = shipFactory(shipsLivesBlue1, counter(), thisShipsCoordinatesBlue1);
const shipBlue2 = shipFactory(shipsLivesBlue2, counter() + 1, thisShipsCoordinatesBlue2);
shipContainerBlue.push(shipBlue1);
shipContainerBlue.push(shipBlue2);

// shipContainerB data
const shipContainerRed = [];
const shipsLivesRed1 = 4;
const shipsLivesRed2 = 5;
const thisShipsCoordinatesRed1 = {
  0: 'C1',
  1: 'C2',
  2: 'C3',
  3: 'C4',
  4: 'C5',
};
const thisShipsCoordinatesRed2 = {
  0: 'D1',
  1: 'D2',
  2: 'D3',
  3: 'D4',
  4: 'D5',
  5: 'D6',
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
