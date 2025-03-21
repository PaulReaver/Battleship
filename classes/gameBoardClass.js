import { Ship } from "./shipClass.js";

class GameBoard {
	constructor() {
		this.board = new Array(10).fill().map(() => new Array(10).fill(""));
	}

	placeShips() {
		const carrier = new Ship(5);
		const battleship = new Ship(4);
		const destroyer = new Ship(3);
		const submarine = new Ship(3);
		const patrol = new Ship(2);

		for (let i = 0; i < 5; i++) {
			this.board[0][i] = "carrier";
		}

		for (let i = 0; i < 4; i++) {
			this.board[1][i] = "battleship";
		}

		for (let i = 0; i < 3; i++) {
			this.board[2][i] = "destroyer";
			this.board[3][i] = "submarine";
		}
		for (let i = 0; i < 2; i++) {
			this.board[4][i] = "patrol";
		}
	}
}

export { GameBoard };
