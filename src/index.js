/* eslint-disable no-console */
import './style.css';
import { gameBoardFactory } from './modules/gameboard';
import './modules/ui';

const creatingBoard = gameBoardFactory();
creatingBoard.getCreateGameBoard();

const ships = document.querySelectorAll('.ship');
const gridSquares = document.querySelectorAll('.grid-square');
const bodyOfShips = document.querySelectorAll('.bodyOfShip');
let myCounter;

const counter = () => {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
};

const add = counter();

ships.forEach((ship) => {
  ship.addEventListener('dragstart', () => {
    ship.classList.add('dragging');
  });
});

let shipNumber;
bodyOfShips.forEach((bodyOfShip) => {
  bodyOfShip.addEventListener('mousedown', () => {
    shipNumber = +bodyOfShip.getAttribute('ship-number');
  });
});

let currentLocation;
let originalLocation;
let lengthOfShip;

const getShipNumber = () => {
  for (let i = 0; i <= lengthOfShip - shipNumber; i++) {
    const thisSquare = document.querySelector(
      `[data-number="${currentLocation}"]`
    );
    thisSquare.style.backgroundColor = 'grey';
    currentLocation += 10;
  }
  for (let i = 0; i <= shipNumber - 1; i++) {
    const thisSquare = document.querySelector(
      `[data-number="${originalLocation}"]`
    );
    thisSquare.style.backgroundColor = 'green';
    originalLocation -= 10;
  }
};

const getShipNumber2 = () => {
  for (let i = 0; i <= lengthOfShip - shipNumber; i++) {
    const thisSquare = document.querySelector(
      `[data-number="${currentLocation}"]`
    );
    thisSquare.style.backgroundColor = 'grey';
    currentLocation += 1;
  }
  for (let i = 0; i <= shipNumber - 1; i++) {
    const thisSquare = document.querySelector(
      `[data-number="${originalLocation}"]`
    );
    thisSquare.style.backgroundColor = 'orange';
    originalLocation -= 1;
  }
};

const showParentElement = (e) => {
  console.log('b');

  const gridInContainerContainingShip = document.getElementById(
    `${myCounter.counting}`
  );
  console.log(gridInContainerContainingShip);
  if (gridInContainerContainingShip) {
    lengthOfShip =
      gridInContainerContainingShip.firstElementChild.childElementCount;
    if (
      gridInContainerContainingShip.firstElementChild.classList.contains(
        'column'
      )
    ) {
      currentLocation = +gridInContainerContainingShip.getAttribute(
        'data-number'
      );
      originalLocation = +gridInContainerContainingShip.getAttribute(
        'data-number'
      );

      // creating divs for ship at location of mouse and down

      getShipNumber();
    }
    if (
      gridInContainerContainingShip.firstElementChild.classList.contains('row')
    ) {
      currentLocation = +gridInContainerContainingShip.getAttribute(
        'data-number'
      );
      originalLocation = +gridInContainerContainingShip.getAttribute(
        'data-number'
      );

      getShipNumber2();
    }
  }
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
    dragging.classList.add('hidden');
    console.log('a');
    myCounter = { counting: add() };
    dragging.parentElement.id = `${myCounter.counting}`;
    showParentElement(e);
  });
});
