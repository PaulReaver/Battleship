class GameBoard {
	constructor() {
		this.board = new Array(10).fill().map(() => new Array(10).fill(""));
	}
}

export { GameBoard };
