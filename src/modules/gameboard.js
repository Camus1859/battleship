/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */

export const gameBoardFactory = (shipContainer) => {
  const missedShots = [];
  const getMissedShots = () => missedShots;

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
    const equalToFalse = (bool) => bool === false;

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
  };
};
