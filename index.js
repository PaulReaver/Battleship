import { Player } from "./js/playerClass.js";
import { renderGameBoard } from "./js/renderGameBoard.js";

const playerHuman = new Player("Paul");
const playerComputer = new Player("Computer", true);

playerHuman.ownBoard.placeShips();
playerComputer.ownBoard.placeShips();

renderGameBoard(
	document.querySelector(".player-game-board"),
	playerHuman.ownBoard,
);
renderGameBoard(
	document.querySelector(".computer-game-board"),
	playerComputer.ownBoard,
);
