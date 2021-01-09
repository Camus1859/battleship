/* eslint-disable no-undef */
import { gameBoardBlue, gameBoardRed } from './gameBoard.test';
import { player } from '../modules/player';

const playerBlueAttack = player(gameBoardRed);
const playerRedAttack = player(gameBoardBlue);

test('player red/player2 attacks player blue/player1s board', () => {
  expect(playerRedAttack.opponentsGameBoard.attackTheBoardAt('A1')).toStrictEqual([
    false,
    true,
    true,
    true,
    true,
  ]);
});

test('player blue/player1 attacks player red/player2s board', () => {
  expect(playerBlueAttack.opponentsGameBoard.attackTheBoardAt('C3')).toStrictEqual([
    true,
    true,
    false,
    true,
    true,
  ]);
});
