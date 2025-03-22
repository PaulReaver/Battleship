import { Ship } from "./shipClass.js";

class GameBoard {
	constructor() {
		this.board = new Array(10).fill().map(() => new Array(10).fill(null));
		this.carrier = new Ship(5);
		this.battleship = new Ship(4);
		this.destroyer = new Ship(3);
		this.submarine = new Ship(3);
		this.patrol = new Ship(2);
	}

	placeShips() {
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

	receiveAttack(x, y) {
		if (x < 0 || x > 9 || y < 0 || y > 9) {
			return "Out of bounds";
		}

		if (this.board[x][y] === "hit" || this.board[x][y] === "miss") {
			return "Tile already hit";
		}

		if (this.board[x][y] === "carrier") {
			this.carrier.hit();
			this.board[x][y] = "hit";
		} else if (this.board[x][y] === "battleship") {
			this.battleship.hit();
			this.board[x][y] = "hit";
		} else if (this.board[x][y] === "destroyer") {
			this.destroyer.hit();
			this.board[x][y] = "hit";
		} else if (this.board[x][y] === "submarine") {
			this.submarine.hit();
			this.board[x][y] = "hit";
		} else if (this.board[x][y] === "patrol") {
			this.patrol.hit();
			this.board[x][y] = "hit";
		} else {
			this.board[x][y] = "miss";
		}
	}

	gameOver() {
		if (
			this.carrier.isSunk() &&
			this.battleship.isSunk() &&
			this.destroyer.isSunk() &&
			this.submarine.isSunk() &&
			this.patrol.isSunk()
		) {
			return true;
		}
	}
}

export { GameBoard };
