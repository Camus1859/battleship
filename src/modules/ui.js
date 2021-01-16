/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { gameFlow } from './gameflow';

const rulesBtn = document.querySelector('#btn-rules');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const xAxisBtn = document.querySelector('.btn-axis-x');
const yAxisBtn = document.querySelector('.btn-axis-y');
const enterYourName = document.querySelector('#enterYourName');
const submitBtn = document.querySelector('#submitBtn');
const playerNameHeader = document.querySelector('#playerNameHeader');

const displayRules = () => {
  modal.classList.remove('hidden');
};

const hideRules = () => {
  modal.classList.add('hidden');
};

const displayYaxisBtn = () => {
  const carriersContainer = document.querySelector('.carriers-Container');
  carriersContainer.style.flexDirection = 'column';
  const ships = document.querySelectorAll('.ship');
  ships.forEach((ship) => {
    ship.style.flexDirection = 'row';
    ship.classList.add('row');
    ship.classList.remove('column');
  });
  yAxisBtn.classList.remove('hidden');
  xAxisBtn.classList.add('hidden');
};

const displayXaxisBtn = () => {
  const carriersContainer = document.querySelector('.carriers-Container');
  carriersContainer.style.flexDirection = 'row';
  const ships = document.querySelectorAll('.ship');
  ships.forEach((ship) => {
    ship.style.flexDirection = 'column';
    ship.classList.add('column');
    ship.classList.remove('row');
  });
  xAxisBtn.classList.remove('hidden');
  yAxisBtn.classList.add('hidden');
};

const getPlayersName = (e) => {
  e.preventDefault();
  const userName = enterYourName.value;
  enterYourName.value = '';
  playerNameHeader.textContent = userName;
};


rulesBtn.addEventListener('click', displayRules);
closeModal.addEventListener('click', hideRules);
xAxisBtn.addEventListener('click', displayYaxisBtn);
yAxisBtn.addEventListener('click', displayXaxisBtn);
submitBtn.addEventListener('click', getPlayersName);
