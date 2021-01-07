/* eslint-disable import/prefer-default-export */
export const gameBoardFactory = (
  shipAtCoordinateX,
  shipAtCoordinateY,
  ship,
) => {
  const receiveAttackAtCoordinates = (
    attackingCoordinateX,
    attackingCoordinateY,
  ) => {
    if (
      shipAtCoordinateX === attackingCoordinateX &&
      shipAtCoordinateY === attackingCoordinateY
    ) {
      ship.hit(3);
      return 'hit';
    } else {
      const missedShots = [];
      missedShots.push(attackingCoordinateX);
      missedShots.push(attackingCoordinateY);
      return missedShots;
    }
  };

  return {
    shipAtCoordinateX,
    shipAtCoordinateY,
    ship,
    receiveAttackAtCoordinates,
  };
};
