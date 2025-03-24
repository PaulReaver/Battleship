import { Player } from "./js/playerClass.js";
import { renderGameBoard } from "./js/renderGameBoard.js";

const playerHuman = new Player("Paul");
const playerComputer = new Player("Computer", true);

renderGameBoard(document.querySelector(".player-game-board"));
renderGameBoard(document.querySelector(".computer-game-board"));

playerHuman.ownBoard.placeShips();
playerComputer.ownBoard.placeShips();
