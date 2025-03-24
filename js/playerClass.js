import { GameBoard } from "./gameBoardClass.js";

class Player {
	constructor(name, isComputer = false) {
		this.name = name;
		this.isComputer = isComputer;
		this.ownBoard = new GameBoard();
	}
}

export { Player };
