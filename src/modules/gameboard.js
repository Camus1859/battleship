/* eslint-disable import/prefer-default-export */

export const gameBoardFactory = (
  shipAtCoordinateX,
  shipAtCoordinateY,
  shipContainer,
) => {
  const missedShots = [];

  const receiveAttackAtCoordinates = (
    attackingCoordinateX,
    attackingCoordinateY,
  ) => {
    if (
      shipAtCoordinateX === attackingCoordinateX &&
      shipAtCoordinateY === attackingCoordinateY
    ) {
      shipContainer[0].hit(3);
      return 'hit';
    }
    missedShots.push(attackingCoordinateX);
    missedShots.push(attackingCoordinateY);
    return missedShots;
  };

  const checkingIfAllShipsAreSunk = () => {};

  return {
    shipAtCoordinateX,
    shipAtCoordinateY,
    shipContainer,
    receiveAttackAtCoordinates,
  };
};
