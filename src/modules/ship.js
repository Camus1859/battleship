/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

export const shipFactory = (shipsLives, id, shipsCoordinates) => {
  const uniqueNumber = id;
  const getUniqueNumber = () => uniqueNumber;
  const shipsLife = [];

  const hitAtLocation = (value) => {
    for (let i = 0; i <= shipsLives; i++) {
      if (shipsLife[i] === false) continue;
      else {
        shipsLife[i] = true;
      }
    }
    shipsLife[value] = false;
    return shipsLife;
  };

  const sunkShip = () => {
    if (shipsLife.every((value) => value === false)) {
      return 'sink';
    }
  };

  return {
    shipsLives,
    hitAtLocation,
    sunkShip,
    getUniqueNumber,
    shipsCoordinates,
  };
};
