import { describe, it, expect, beforeAll } from "bun:test";
import { GameBoard } from "../classes/gameBoardClass.js";

describe("GameBoard", () => {
	let gameBoard;
	beforeAll(() => {
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
});
