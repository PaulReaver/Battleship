class Ship {
	constructor(length) {
		this.length = length;
		this.hits = 0;
	}

	hit() {
		this.hits += 1;
		this.isSunk();
	}

	isSunk() {
		if (this.hits === this.length) {
			return true;
		}
		return false;
	}
}

export { Ship };
