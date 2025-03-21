import { Ship } from "./shipClass.js";

class GameBoard {
	constructor() {
		this.board = new Array(10).fill().map(() => new Array(10).fill(""));
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
		switch (this.board[x][y]) {
			case "carrier":
				this.board[x][y] = "carrier hit";
				break;
			case "battleship":
				this.board[x][y] = "battleship hit";
				break;
			case "destroyer":
				this.board[x][y] = "destroyer hit";
				break;
			case "submarine":
				this.board[x][y] = "submarine hit";
				break;
			case "patrol":
				this.board[x][y] = "patrol hit";
				break;

			default:
				this.board[x][y] = "miss";
				break;
		}
	}
}

export { GameBoard };
