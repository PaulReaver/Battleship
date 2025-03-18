import { describe, it, expect, beforeAll } from "bun:test";
import { GameBoard } from "../classes/gameBoardClass.js";

describe("GameBoard", () => {
	let board;
	beforeAll(() => {
		board = new GameBoard().board;
	});

	it("Should return a 10x10 board", () => {
		expect(board).toBeArrayOfSize(10);
	});

	it("Should check if each array element is of 10x10 size", () => {
		for (const row of board) {
			expect(row).toBeArrayOfSize(10);
		}
	});

	it("Should check if each cell element is empty", () => {
		for (const row of board) {
			for (const cell of row) {
				expect(cell).toBeEmpty();
			}
		}
	});
});
