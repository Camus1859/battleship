/* eslint-disable no-undef */
import { gameBoardBlue, gameBoardRed } from './gameBoard.test';
import { player } from '../modules/player';

const playerBlueAttack = player(gameBoardRed);
const playerRedAttack = player(gameBoardBlue);
const AiRedAttack = player(gameBoardBlue);

test('player blue/player1 attacks player red/player2s board', () => {
  expect(
    playerBlueAttack.opponentsGameBoard.attackTheBoardAt('C3'),
  ).toStrictEqual([true, true, false, true, true]);
});

test('player red/player2 attacks player blue/player1s board', () => {
  expect(
    playerRedAttack.opponentsGameBoard.attackTheBoardAt('A1'),
  ).toStrictEqual([false, true, true, true, true]);
});

//if this returns incorrect its because, the AI hit the ship
test('player AI attacks player blue/player1s board', () => {
  const arrayOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const generateRandomLetter = arrayOfLetters[Math.floor(Math.random() * 9)];
  const generateRandomNumber = arrayOfNumbers[Math.floor(Math.random() * 9)];
  const randomTargetForAI = `${generateRandomLetter}${generateRandomNumber}`;
  expect(
    AiRedAttack.opponentsGameBoard.attackTheBoardAt(randomTargetForAI),
  ).toEqual(['P5', 'K9', 'M14', randomTargetForAI]);
});
