function renderGameBoard(uiBoard, ownBoard) {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			const cell = document.createElement("div");
			uiBoard.appendChild(cell);

			if (
				ownBoard.board[i][j] === "carrier" ||
				ownBoard.board[i][j] === "battleship" ||
				ownBoard.board[i][j] === "destroyer" ||
				ownBoard.board[i][j] === "submarine" ||
				ownBoard.board[i][j] === "patrol"
			) {
				cell.className = "ship";
			}
		}
	}
}

export { renderGameBoard };
