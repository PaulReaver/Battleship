function renderGameBoard(gameBoard) {
	for (let i = 0; i < 100; i++) {
		const cell = document.createElement("div");
		gameBoard.appendChild(cell);
	}
}

export { renderGameBoard };
