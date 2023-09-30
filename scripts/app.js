let editedPlayer = 0;
let currentRound = 1;
let activePlayer = 0;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const backdropElement = document.getElementById("backdrop");
const overlayElement = document.getElementById("config-overlay");
const formElement = document.querySelector("form");
const errorsOutput = document.getElementById("config-errors");

const editPLayerOneButtonElememnt = document.getElementById("edit-player-1");
const editPLayerTwoButtonElememnt = document.getElementById("edit-player-2");
const cancelOverlayButtonElement = document.getElementById("cancel-config");
const startNewGameButtonElement = document.getElementById("new-game");
const gameField = document.getElementById("active-game");
const gameBoardElement = document.getElementById("game-board");
const activePLayerNameElement = document.getElementById("active-player");
const gameOverElement = document.getElementById("end-game");

editPLayerOneButtonElememnt.addEventListener("click", startOverlay);
editPLayerTwoButtonElememnt.addEventListener("click", startOverlay);
cancelOverlayButtonElement.addEventListener("click", closeOverlay);
backdropElement.addEventListener("click", closeOverlay);
formElement.addEventListener("submit", savePlayerData);
startNewGameButtonElement.addEventListener("click", startNewGame);

gameBoardElement.addEventListener("click", selectGameField);
