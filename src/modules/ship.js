// eslint-disable-next-line import/prefer-default-export
export const shipFactory = () => {
  const shipsLength = (length) => length;

  const locationOfHit = (sectionOfHit) => sectionOfHit;

  const sunkShip = () => {
    if (shipsLength() === 0) return 'game over';
  };

  return {
    shipsLength,
    locationOfHit,
    sunkShip,
  };
};
