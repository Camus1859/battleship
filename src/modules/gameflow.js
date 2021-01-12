/* eslint-disable import/prefer-default-export */

import { shipFactory } from './ship';
import { gameBoardFactory } from './gameboard';
import { player } from './player';

export const gameFlow = () => {
  const ContainerForAIsTargets = [];
  let randomTargetForAI;
  const shipContainerBlue = [];
  const shipContainerRed = [];

  const counter = () => {
    let count = 0;
    return function () {
      return counter++;
    };
  };

  /// Made up Data, will come from UI
  const shipsLivesBlue1 = 5;
  const shipsLivesBlue2 = 6;
  const thisShipsCoordinatesBlue1 = {
    0: 6,
    1: 7,
    2: 8,
    3: 9,
    4: 10,
  };
  const thisShipsCoordinatesBlue2 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  const shipBlue1 = shipFactory(
    shipsLivesBlue1,
    counter(),
    thisShipsCoordinatesBlue1
  );
  const shipBlue2 = shipFactory(
    shipsLivesBlue2,
    counter() + 1,
    thisShipsCoordinatesBlue2
  );
  / /; ///////////////////////////////////////////

  /// Made up Data, will come from UI
  const shipsLivesRed1 = 5;
  const shipsLivesRed2 = 6;
  const thisShipsCoordinatesRed1 = {
    0: 30,
    1: 31,
    2: 32,
    3: 33,
    4: 34,
  };
  const thisShipsCoordinatesRed2 = {
    0: 95,
    1: 96,
    2: 97,
    3: 98,
    4: 99,
    5: 100,
  };
  const shipRed1 = shipFactory(
    shipsLivesRed1,
    counter() + 2,
    thisShipsCoordinatesRed1
  );
  const shipRed2 = shipFactory(
    shipsLivesRed2,
    counter() + 3,
    thisShipsCoordinatesRed2
  );

  shipContainerBlue.push(shipBlue1);
  shipContainerBlue.push(shipBlue2);
  shipContainerRed.push(shipRed1);
  shipContainerRed.push(shipRed2);

  const gameBoardBlue = gameBoardFactory(shipContainerBlue);
  const gameBoardRed = gameBoardFactory(shipContainerRed);

  const playerBlueAttack = player(gameBoardRed);
  const AiRedAttack = player(gameBoardBlue);



  const generateAITargetValue = () => {
    randomTargetForAI = Math.floor(Math.random() * 100);
    // eslint-disable-next-line no-use-before-define
    randomTargetForAI = comparingAITargetToShipsCoordinates(randomTargetForAI);
    ContainerForAIsTargets.push(randomTargetForAI);
    return randomTargetForAI;
  };

  const comparingAITargetToShipsCoordinates = (AICurrentTargetValue) => {
    const targetValueAlreadyInContainer = ContainerForAIsTargets.find(
      (previousTargetValue) => previousTargetValue === AICurrentTargetValue
    );
    if (targetValueAlreadyInContainer) {
      generateAITargetValue();
    }
    return AICurrentTargetValue;
  };

  return { shipContainerBlue };
};
