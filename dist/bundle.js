/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");



var creatingBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoardFactory)();
creatingBoard.getCreateGameBoard();

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoardFactory": () => /* binding */ gameBoardFactory
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-else-return */

/* eslint-disable no-undef */

/* eslint-disable no-restricted-syntax */

/* eslint-disable import/prefer-default-export */
var gameBoardFactory = function gameBoardFactory(shipContainer) {
  var missedShots = [];

  var getMissedShots = function getMissedShots() {
    return missedShots;
  };

  var equalToFalse = function equalToFalse(bool) {
    return bool === false;
  };

  var createGameBoard = function createGameBoard() {
    var gridContainer1 = document.querySelector('.gridContainer1');

    for (var i = 0; i <= 100; i++) {
      var newDiv = document.createElement('div');
      newDiv.setAttribute('data-number', "".concat(i));
      newDiv.classList.add('grid-square');
      gridContainer1.appendChild(newDiv);
    }

    createGameBoard2();
  };

  var createGameBoard2 = function createGameBoard2() {
    var gridContainer2 = document.querySelector('.gridContainer2');

    for (var i = 0; i <= 100; i++) {
      var newDiv = document.createElement('div');
      newDiv.setAttribute('data', "".concat(i));
      newDiv.classList.add('grid-square');
      gridContainer2.appendChild(newDiv);
    }
  };

  var getCreateGameBoard = function getCreateGameBoard() {
    return createGameBoard();
  };

  var attackTheBoardAt = function attackTheBoardAt(locationOfAttack) {
    for (var i = 0; i <= shipContainer.length; i++) {
      for (var _i = 0, _Object$entries = Object.entries(shipContainer[i].shipsCoordinates); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            shipsLocation = _Object$entries$_i[1];

        if (shipsLocation == locationOfAttack) {
          return shipContainer[i].hitTheShipAtThisIndex(key);
        }
      }

      missedShots.push(locationOfAttack);
      return missedShots;
    }
  };

  var checkingIfAllShipsAreSunk = function checkingIfAllShipsAreSunk() {
    var allFalse = shipContainer.map(function (ship) {
      return ship.getShipsLife();
    }).map(function (arr) {
      return arr.every(equalToFalse);
    });
    allFalse = allFalse.every(function (item) {
      return item === true;
    });
    return allFalse;
  };

  return {
    shipContainer: shipContainer,
    attackTheBoardAt: attackTheBoardAt,
    checkingIfAllShipsAreSunk: checkingIfAllShipsAreSunk,
    getMissedShots: getMissedShots,
    getCreateGameBoard: getCreateGameBoard
  };
};

/***/ }),

/***/ "./src/modules/gameflow.js":
/*!*********************************!*\
  !*** ./src/modules/gameflow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameFlow": () => /* binding */ gameFlow
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

/* eslint-disable import/prefer-default-export */



var gameFlow = function gameFlow() {
  var ContainerForAIsTargets = [];
  var randomTargetForAI;
  var shipContainerBlue = [];
  var shipContainerRed = [];

  var _counter = function counter() {
    var count = 0;
    return function () {
      return _readOnlyError("counter"), _counter++;
    };
  }; /// Made up Data, will come from UI


  var shipsLivesBlue1 = 5;
  var shipsLivesBlue2 = 6;
  var thisShipsCoordinatesBlue1 = {
    0: 6,
    1: 7,
    2: 8,
    3: 9,
    4: 10
  };
  var thisShipsCoordinatesBlue2 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5
  };
  var shipBlue1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(shipsLivesBlue1, _counter(), thisShipsCoordinatesBlue1);
  var shipBlue2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(shipsLivesBlue2, _counter() + 1, thisShipsCoordinatesBlue2);
  / /; ///////////////////////////////////////////
  /// Made up Data, will come from UI

  var shipsLivesRed1 = 5;
  var shipsLivesRed2 = 6;
  var thisShipsCoordinatesRed1 = {
    0: 30,
    1: 31,
    2: 32,
    3: 33,
    4: 34
  };
  var thisShipsCoordinatesRed2 = {
    0: 95,
    1: 96,
    2: 97,
    3: 98,
    4: 99,
    5: 100
  };
  var shipRed1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(shipsLivesRed1, _counter() + 2, thisShipsCoordinatesRed1);
  var shipRed2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.shipFactory)(shipsLivesRed2, _counter() + 3, thisShipsCoordinatesRed2);
  shipContainerBlue.push(shipBlue1);
  shipContainerBlue.push(shipBlue2);
  shipContainerRed.push(shipRed1);
  shipContainerRed.push(shipRed2);
  var gameBoardBlue = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoardFactory)(shipContainerBlue);
  var gameBoardRed = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.gameBoardFactory)(shipContainerRed);
  var playerBlueAttack = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(gameBoardRed);
  var AiRedAttack = (0,_player__WEBPACK_IMPORTED_MODULE_2__.player)(gameBoardBlue);

  var generateAITargetValue = function generateAITargetValue() {
    randomTargetForAI = Math.floor(Math.random() * 100); // eslint-disable-next-line no-use-before-define

    randomTargetForAI = comparingAITargetToShipsCoordinates(randomTargetForAI);
    ContainerForAIsTargets.push(randomTargetForAI);
    return randomTargetForAI;
  };

  var comparingAITargetToShipsCoordinates = function comparingAITargetToShipsCoordinates(AICurrentTargetValue) {
    var targetValueAlreadyInContainer = ContainerForAIsTargets.find(function (previousTargetValue) {
      return previousTargetValue === AICurrentTargetValue;
    });

    if (targetValueAlreadyInContainer) {
      generateAITargetValue();
    }

    return AICurrentTargetValue;
  };

  return {
    shipContainerBlue: shipContainerBlue
  };
};

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => /* binding */ player
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
var player = function player(opponentsGameBoard) {
  return {
    opponentsGameBoard: opponentsGameBoard
  };
};

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => /* binding */ shipFactory
/* harmony export */ });
/* eslint-disable no-plusplus */

/* eslint-disable import/prefer-default-export */
var shipFactory = function shipFactory(shipsLives, id, shipsCoordinates) {
  var uniqueNumber = id;

  var getUniqueNumber = function getUniqueNumber() {
    return uniqueNumber;
  };

  var shipsLife = [];

  var getShipsLife = function getShipsLife() {
    return shipsLife;
  };

  var hitTheShipAtThisIndex = function hitTheShipAtThisIndex(value) {
    for (var i = 0; i <= shipsLives; i++) {
      if (shipsLife[i] === false) continue;else {
        shipsLife[i] = true;
      }
    }

    shipsLife[value] = false;
    return shipsLife;
  };

  var sunkShip = function sunkShip() {
    if (shipsLife.every(function (value) {
      return value === false;
    })) {
      return 'sink';
    }
  };

  return {
    shipsLives: shipsLives,
    hitTheShipAtThisIndex: hitTheShipAtThisIndex,
    sunkShip: sunkShip,
    getUniqueNumber: getUniqueNumber,
    shipsCoordinates: shipsCoordinates,
    getShipsLife: getShipsLife
  };
};

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameflow */ "./src/modules/gameflow.js");
/* eslint-disable no-console */

/* eslint-disable import/prefer-default-export */

var rulesBtn = document.querySelector('#btn-rules');
var closeModal = document.querySelector('.close-modal');
var modal = document.querySelector('.modal');
var xAxisBtn = document.querySelector('.btn-axis-x');
var yAxisBtn = document.querySelector('.btn-axis-y');
var enterYourName = document.querySelector('#enterYourName');
var submitBtn = document.querySelector('#submitBtn');
var playerNameHeader = document.querySelector('#playerNameHeader');

var displayRules = function displayRules() {
  modal.classList.remove('hidden');
};

var hideRules = function hideRules() {
  modal.classList.add('hidden');
};

var displayYaxisBtn = function displayYaxisBtn() {
  yAxisBtn.classList.remove('hidden');
  xAxisBtn.classList.add('hidden');
};

var displayXaxisBtn = function displayXaxisBtn() {
  xAxisBtn.classList.remove('hidden');
  yAxisBtn.classList.add('hidden');
};

var getPlayersName = function getPlayersName(e) {
  e.preventDefault();
  var userName = enterYourName.value;
  enterYourName.value = '';
  playerNameHeader.textContent = userName;
};

rulesBtn.addEventListener('click', displayRules);
closeModal.addEventListener('click', hideRules);
xAxisBtn.addEventListener('click', displayYaxisBtn);
yAxisBtn.addEventListener('click', displayXaxisBtn);
submitBtn.addEventListener('click', getPlayersName);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n  background: rgb(237, 237, 238);\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.carrier{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(127, 136, 143);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.battleship{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(235, 94, 28);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.destroyer{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(107, 185, 5);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.submarine{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(17, 5, 185);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.patrol-boat{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(255, 189, 6);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n\n.gridContainer1{\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  background-color: rgb(110, 195, 252);\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n}\n\n.gridContainer2{\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  background-color:  rgb(110, 195, 252);\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n}\n\n.grid-square{\n  border: 1px solid black;\n}\n\nform{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n}\n\n\n\n.name-title {\n  display: inline-block;\n  font-size: 65px;\n  color: #000;\n  font-family: 'Oswald', sans-serif;\n  margin-bottom: 2rem;\n}\n\n.capt-info{\n  border: 2px solid black;\n  padding: 15px 120px 20px 120px;\n  font-size: 35px;\n  font-weight: normal;\n  border-radius: 10px;\n  background: rgb(255, 255, 255);\n  margin-bottom: 2rem;\n  height: 30px;\n  background-color: rgb(191, 203, 209);\n  \n\n\n}\n\n.btns{\n  padding: 10px;\n  font-weight: bold;\n  background-color: white;\n  outline: none;\n  font-size: 15px;\n  border:none;\n}\n\n.btns:hover{\n  background-color: rgb(237, 248, 255);\n  cursor: pointer;\n}\n\n.hidden{\n  display: none;\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 30%;\n  padding: 0rem 3rem 3rem 3rem;\n  border-radius: 20px;\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\n  z-index: 10;\n  border: 1px solid black;\n  width: 30%;\n  height: 33%;\n  background: rgb(255, 255, 255);\n\n}\n\n#rules-title{\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.close-modal{\n  position: absolute;\n  top: 1.2rem;\n  right: 2rem;\n  font-size: 2rem;\n  color: rgb(0, 0, 0);\n  cursor: pointer;\n  border: none;\n  background: none;\n  outline: none;\n\n\n}\n\n.close-modal:hover{\n  outline: none;\n}\n\np{\n text-align: center;\n font-size: 18px;\n}\n\n#enterYourName{\n  padding: 15px 30px 15px 30px;\n  width: 40%;\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  font-size: 50px;\n  font-weight: bolder;\n\n}\n\n#submitBtn {\n  font-size: 25px;\n  font-weight: bolder;\n  padding: 15px;\n  cursor: pointer;\n}\n\n.playerNameContainer{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 20rem;\n}\n\n.nameOnShips{\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  justify-content: space-around;\n}\n\n#playerNameHeader, #enemyWaters{\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  padding: 1rem 0rem 1rem 0rem;\n  font-weight: bold;\n  font-size: 2rem;\n  margin-bottom: 5px;\n  height: 37px;\n}\n\n.btns-container{\n  margin-bottom: 2rem;\n}\n\n#ships-main-container{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-right: 20rem;\n}\n\n.carriers-Container{\n  height: 300px;\n  width: 300px;\n  background-color: rgb(210, 212, 218);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* flex-direction: column; */\n\n}\n\n.ships{\n  /* display: flex;\n  justify-content: center; */\n}\n\n/* .carriers-Container{ y axis\n  height: 300px;\n  width: 300px;\n  background-color: rgb(210, 212, 218);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ships{\n\n} */\n\n\n/* .carriers-Container{ x axis centered\n  height: 300px;\n  width: 300px;\n  background-color: rgb(210, 212, 218);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.ships{\n  display: flex;\n  justify-content: center;\n} */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n  background: rgb(237, 237, 238);\n}\n\n#content-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.carrier{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(127, 136, 143);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.battleship{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(235, 94, 28);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.destroyer{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(107, 185, 5);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.submarine{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(17, 5, 185);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n.patrol-boat{\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  background-color: rgb(255, 189, 6);\n  height: 50px;\n  width: 50px;\n  border: 1px solid black;\n}\n\n\n.gridContainer1{\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  background-color: rgb(110, 195, 252);\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n}\n\n.gridContainer2{\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  background-color:  rgb(110, 195, 252);\n  height: 500px;\n  width: 500px;\n  border: 1px solid black;\n}\n\n.grid-square{\n  border: 1px solid black;\n}\n\nform{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n}\n\n\n\n.name-title {\n  display: inline-block;\n  font-size: 65px;\n  color: #000;\n  font-family: 'Oswald', sans-serif;\n  margin-bottom: 2rem;\n}\n\n.capt-info{\n  border: 2px solid black;\n  padding: 15px 120px 20px 120px;\n  font-size: 35px;\n  font-weight: normal;\n  border-radius: 10px;\n  background: rgb(255, 255, 255);\n  margin-bottom: 2rem;\n  height: 30px;\n  background-color: rgb(191, 203, 209);\n  \n\n\n}\n\n.btns{\n  padding: 10px;\n  font-weight: bold;\n  background-color: white;\n  outline: none;\n  font-size: 15px;\n  border:none;\n}\n\n.btns:hover{\n  background-color: rgb(237, 248, 255);\n  cursor: pointer;\n}\n\n.hidden{\n  display: none;\n}\n\n.modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 30%;\n  padding: 0rem 3rem 3rem 3rem;\n  border-radius: 20px;\n  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);\n  z-index: 10;\n  border: 1px solid black;\n  width: 30%;\n  height: 33%;\n  background: rgb(255, 255, 255);\n\n}\n\n#rules-title{\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.close-modal{\n  position: absolute;\n  top: 1.2rem;\n  right: 2rem;\n  font-size: 2rem;\n  color: rgb(0, 0, 0);\n  cursor: pointer;\n  border: none;\n  background: none;\n  outline: none;\n\n\n}\n\n.close-modal:hover{\n  outline: none;\n}\n\np{\n text-align: center;\n font-size: 18px;\n}\n\n#enterYourName{\n  padding: 15px 30px 15px 30px;\n  width: 40%;\n  height: 30px;\n  border-radius: 10px;\n  outline: none;\n  font-size: 20px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  font-size: 50px;\n  font-weight: bolder;\n\n}\n\n#submitBtn {\n  font-size: 25px;\n  font-weight: bolder;\n  padding: 15px;\n  cursor: pointer;\n}\n\n.playerNameContainer{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 20rem;\n}\n\n.nameOnShips{\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  justify-content: space-around;\n}\n\n#playerNameHeader, #enemyWaters{\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-align: center;\n  padding: 1rem 0rem 1rem 0rem;\n  font-weight: bold;\n  font-size: 2rem;\n  margin-bottom: 5px;\n  height: 37px;\n}\n\n.btns-container{\n  margin-bottom: 2rem;\n}\n\n#ships-main-container{\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-right: 20rem;\n}\n\n.carriers-Container{\n  height: 300px;\n  width: 300px;\n  background-color: rgb(210, 212, 218);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* flex-direction: column; */\n\n}\n\n.ships{\n  /* display: flex;\n  justify-content: center; */\n}\n\n/* .carriers-Container{ y axis\n  height: 300px;\n  width: 300px;\n  background-color: rgb(210, 212, 218);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.ships{\n\n} */\n\n\n/* .carriers-Container{ x axis centered\n  height: 300px;\n  width: 300px;\n  background-color: rgb(210, 212, 218);\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.ships{\n  display: flex;\n  justify-content: center;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map