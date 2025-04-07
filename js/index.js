import { Player } from "./playerClass.js";
import { renderGameBoard } from "./renderGameBoard.js";

const playerHuman = new Player("Paul");
const playerComputer = new Player("Computer", true);

const computerUiBoard = document.querySelector(".computer-game-board");
const playerUiBoard = document.querySelector(".player-game-board");

playerHuman.ownBoard.placeShips();
playerComputer.ownBoard.placeShips();

renderGameBoard(playerUiBoard, playerHuman.ownBoard);
renderGameBoard(computerUiBoard, playerComputer.ownBoard);

computerUiBoard.addEventListener("click", (e) => {
	if (e.target.tagName === "DIV") {
		const cell = e.target;
		const x = cell.getAttribute("x");
		const y = cell.getAttribute("y");
		playerComputer.ownBoard.receiveAttack(x, y);
		renderGameBoard(computerUiBoard, playerComputer.ownBoard);
	}
});
