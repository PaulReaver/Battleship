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
		const patrolBoat = new Ship(2);
	}
}

export { GameBoard };
