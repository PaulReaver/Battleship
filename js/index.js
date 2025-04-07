import { Player } from "./playerClass.js";
import { renderGameBoard } from "./renderGameBoard.js";

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
