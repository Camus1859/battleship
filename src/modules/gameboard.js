/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */

export const gameBoardFactory = (shipContainer) => {
  const missedShots = [];

  const attackShipAt = (locationOfAttack) => {
    for (let i = 0; i <= shipContainer.length; i++) {
      for (const [key, shipsLocation] of Object.entries(
        shipContainer[i].shipsCoordinates
      )) {
        if (shipsLocation !== locationOfAttack) {
          missedShots.push(locationOfAttack);
          return missedShots;
        } else {
          return shipContainer[i].hitAtLocation(key);
        }
      }
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
    attackShipAt,
    checkingIfAllShipsAreSunk,
  };
};
