/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import { player } from '../modules/player';
import { gameBoardBlue, gameBoardRed } from './gameBoard.test';

const playerBlueAttack = player(gameBoardRed);
const playerRedAttack = player(gameBoardBlue);
const AiRedAttack = player(gameBoardBlue);

const ContainerForAIsTargets = [];
let randomTargetForAI;

const generateAITargetValue = () => {
  const arrayOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const randomLetter = arrayOfLetters[Math.floor(Math.random() * 9)];
  const randomNumber = arrayOfNumbers[Math.floor(Math.random() * 9)];
  randomTargetForAI = `${randomLetter}${randomNumber}`;
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

test('player blue/player1 attacks player red/player2s board', () => {
  expect(
    playerBlueAttack.opponentsGameBoard.attackTheBoardAt('C3')
  ).toStrictEqual([true, true, false, true, true]);
});

test('player red/player2 attacks player blue/player1s board', () => {
  expect(
    playerRedAttack.opponentsGameBoard.attackTheBoardAt('A1')
  ).toStrictEqual([false, true, true, true, true]);
});

// if this returns incorrect its because, the AI hit the ship. Reload.
test('player AI attacks player blue/player1s board', () => {
  expect(
    AiRedAttack.opponentsGameBoard.attackTheBoardAt(generateAITargetValue())
  ).toEqual(['P5', 'K9', 'M14', randomTargetForAI]);
});
