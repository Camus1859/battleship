/* eslint-disable no-console */
import './style.css';
import { gameBoardFactory } from './modules/gameboard';
import './modules/ui';

const creatingBoard = gameBoardFactory();
creatingBoard.getCreateGameBoard();

const ships = document.querySelectorAll('.ship');
const gridSquares = document.querySelectorAll('.grid-square');

ships.forEach((ship) => {
  ship.addEventListener('dragstart', () => {
    ship.classList.add('dragging');
  });
});

const showParentElement = (e) => {
  ships.forEach((ship) => {
    const shipLandedHere = ship.closest('.grid-square');
    if (shipLandedHere) {
      const numberOfGridSquares =
        shipLandedHere.firstElementChild.childElementCount;
      if (shipLandedHere.firstElementChild.classList.contains('column')) {
        let currentLocation = +shipLandedHere.getAttribute('data-number');

        for (let i = 0; i < numberOfGridSquares; i++) {
          const thisSquare = document.querySelector(
            `[data-number="${currentLocation}"]`
          );
          thisSquare.style.backgroundColor = 'grey';
          currentLocation += 10;
          console.log(shipLandedHere);
        }
        shipLandedHere.firstElementChild.remove();
      } else {
        if (shipLandedHere.firstElementChild.classList.contains('row')) {
        }
      }
    }
  });
};

// let toDoDiv = document.querySelector(`[data-number="${checkBoxNumber}"]`)

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener('dragenter', (e) => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    gridSquare.appendChild(dragging);
  });
});

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener('dragend', (e) => {
    const dragging = document.querySelector('.dragging');
    dragging.classList.remove('dragging');
    dragging.classList.remove('ship');
    dragging.classList.add('shipAxis');
    showParentElement(e);
  });
});
