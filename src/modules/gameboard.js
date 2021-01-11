/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */

export const gameBoardFactory = (shipContainer) => {
  const missedShots = [];
  const getMissedShots = () => missedShots;
  const equalToFalse = (bool) => bool === false;
  const atoz = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const createGameBoard = () => {
    const gridContainer1 = document.querySelector('.gridContainer1');
    for (let i = 0; i <= 100; i++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('data-number', `${i}`);
      newDiv.classList.add('grid-square');
      gridContainer1.appendChild(newDiv);
    }
    createGameBoard2();
  };

  const createGameBoard2 = () => {
    const gridContainer2 = document.querySelector('.gridContainer2');
    for (let i = 0; i <= 100; i++) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('data-number', `${i}`);
      newDiv.classList.add('grid-square');
      gridContainer2.appendChild(newDiv);
    }
  };

  const getCreateGameBoard = () => createGameBoard();

  const attackTheBoardAt = (locationOfAttack) => {
    for (let i = 0; i <= shipContainer.length; i++) {
      for (const [key, shipsLocation] of Object.entries(
        shipContainer[i].shipsCoordinates
      )) {
        if (shipsLocation === locationOfAttack) {
          return shipContainer[i].hitTheShipAtThisIndex(key);
        }
      }
      missedShots.push(locationOfAttack);
      return missedShots;
    }
  };

  const checkingIfAllShipsAreSunk = () => {
    let allFalse = shipContainer
      .map((ship) => ship.getShipsLife())
      .map((arr) => arr.every(equalToFalse));
    allFalse = allFalse.every((item) => item === true);
    return allFalse;
  };

  return {
    shipContainer,
    attackTheBoardAt,
    checkingIfAllShipsAreSunk,
    getMissedShots,
    getCreateGameBoard,
  };
};
