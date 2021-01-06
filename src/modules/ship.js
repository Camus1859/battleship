/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */

export const shipFactory = (length) => {
  const shipsLife = [];

  const hit = (value) => {
    for (let i = 0; i <= length; i++) {
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
    length,
    hit,
    sunkShip,
  };
};
