/* eslint-disable no-console */
import './style.css';
import { gameBoardFactory } from './modules/gameboard';
import './modules/ui';

const creatingBoard = gameBoardFactory();
creatingBoard.getCreateGameBoard();

const ships = document.querySelectorAll('.ship');
const gridSquares = document.querySelectorAll('.grid-square');
const bodyOfShips = document.querySelectorAll('.bodyOfShip');

ships.forEach((ship) => {
  ship.addEventListener('dragstart', () => {
    ship.classList.add('dragging');
  });
});

const showParentElement = (e) => {
  let shipNumber;
  let lengthOfShip;
  ships.forEach((ship) => {
    const gridInContainerContainingShip = ship.closest('.grid-square');
    if (gridInContainerContainingShip) {
      lengthOfShip =
        gridInContainerContainingShip.firstElementChild.childElementCount;
      if (
        gridInContainerContainingShip.firstElementChild.classList.contains(
          'column'
        )
      ) {
        let currentLocation = +gridInContainerContainingShip.getAttribute(
          'data-number'
        );

        bodyOfShips.forEach((bodyOfShip) => {
          bodyOfShip.addEventListener('mousedown', () => {
            shipNumber = +bodyOfShip.getAttribute('ship-number');
          });
        });

        for (let i = 0; i <= shipNumber - 1; i++) {
          const thisSquare = document.querySelector(
            `[data-number="${currentLocation}"]`
          );
          thisSquare.style.backgroundColor = 'grey';
          currentLocation -= 10;
        }
        for (let i = 0; i <= lengthOfShip - shipNumber; i++) {
          const thisSquare = document.querySelector(
            `[data-number="${currentLocation}"]`
          );
          thisSquare.style.backgroundColor = 'grey';
          currentLocation += 10;
        }
       // gridInContainerContainingShip.firstElementChild.remove();
      }
      // if (
      //   gridInContainerContainingShip.firstElementChild.classList.contains(
      //     'row'
      //   )
      // ) {
      //   let currentLocation = +gridInContainerContainingShip.getAttribute(
      //     'data-number'
      //   );
      //   for (let i = 0; i < lengthOfShip; i++) {
      //     const thisSquare = document.querySelector(
      //       `[data-number="${currentLocation}"]`
      //     );
      //     thisSquare.style.backgroundColor = 'grey';
      //     currentLocation += 1;
      //   }
      //   gridInContainerContainingShip.firstElementChild.remove();
      // }
    }
  });
};

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener('dragenter', (e) => {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    if (dragging.classList.contains('car')) {
      dragging.style.minWidth = '250px';
    }
    if (dragging.classList.contains('bat')) {
      dragging.style.minWidth = '199px';
    }
    if (dragging.classList.contains('des')) {
      dragging.style.minWidth = '149px';
    }
    if (dragging.classList.contains('pat')) {
      dragging.style.minWidth = '100px';
    }
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
