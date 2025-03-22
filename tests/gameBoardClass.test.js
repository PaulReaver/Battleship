import { describe, it, expect, beforeEach } from "bun:test";
import { GameBoard } from "../classes/gameBoardClass.js";

describe("GameBoard", () => {
	let gameBoard;
	beforeEach(() => {
		gameBoard = new GameBoard();
	});

	it("Should return a 10x10 board", () => {
		expect(gameBoard.board).toBeArrayOfSize(10);
	});

	it("Should check if each array element is of 10x10 size", () => {
		for (const row of gameBoard.board) {
			expect(row).toBeArrayOfSize(10);
		}
	});

	it("Should check if each cell element is empty", () => {
		for (const row of gameBoard.board) {
			for (const cell of row) {
				expect(cell).toBeEmpty();
			}
		}
	});

	it("Should check if ships were place in the board", () => {
		gameBoard.placeShips();
		for (let i = 0; i < 5; i++) {
			expect(gameBoard.board[0][i]).toBe("carrier");
		}
		for (let i = 0; i < 4; i++) {
			expect(gameBoard.board[1][i]).toBe("battleship");
		}
		for (let i = 0; i < 3; i++) {
			expect(gameBoard.board[2][i]).toBe("destroyer");
			expect(gameBoard.board[3][i]).toBe("submarine");
		}
		for (let i = 0; i < 2; i++) {
			expect(gameBoard.board[4][i]).toBe("patrol");
		}
	});

	it("Should check if a missed attack is recorded correctly", () => {
		gameBoard.placeShips();
		gameBoard.receiveAttack(5, 4);
		expect(gameBoard.board[5][4]).toBe("miss");
	});

	it("Should handle out-of-bounds attack", () => {
		expect(gameBoard.receiveAttack(10, 10)).toBe("Out of bounds");

		expect(gameBoard.receiveAttack(-1, 0)).toBe("Out of bounds");
	});

	it("Should check if an attack hit the correct ship", () => {
		gameBoard.placeShips();

		gameBoard.receiveAttack(0, 1);
		expect(gameBoard.board[0][1]).toBe("carrier hit");

		gameBoard.receiveAttack(1, 1);
		expect(gameBoard.board[1][1]).toBe("battleship hit");

		gameBoard.receiveAttack(2, 1);
		expect(gameBoard.board[2][1]).toBe("destroyer hit");

		gameBoard.receiveAttack(3, 1);
		expect(gameBoard.board[3][1]).toBe("submarine hit");

		gameBoard.receiveAttack(4, 1);
		expect(gameBoard.board[4][1]).toBe("patrol hit");
	});

	it("Should report whether or not all ships have been sunk", () => {
		gameBoard.placeShips();
		while (!gameBoard.carrier.isSunk()) {
			gameBoard.carrier.hit();
		}
		while (!gameBoard.battleship.isSunk()) {
			gameBoard.battleship.hit();
		}
		while (!gameBoard.destroyer.isSunk()) {
			gameBoard.destroyer.hit();
		}
		while (!gameBoard.submarine.isSunk()) {
			gameBoard.submarine.hit();
		}
		while (!gameBoard.patrol.isSunk()) {
			gameBoard.patrol.hit();
		}

		expect(gameBoard.gameOver()).toBeTrue();
	});
});
