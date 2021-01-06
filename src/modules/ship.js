/* eslint-disable import/prefer-default-export */

export const shipFactory = (length) => {

  const hit = (value) => {
    const shipsLife = [];
    for (let i = 0; i < length; i++) {
      shipsLife[i] = true;
    }
    shipsLife[value] = false;
    return shipsLife;
  };

  return {
    length,
    hit,
  };
};
