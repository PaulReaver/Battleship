class Ship {
	constructor(length) {
		if (typeof length !== "number" || length <= 0) {
			throw new Error("Ship length must be a positive number.");
		}
		this.length = length;
		this.hits = 0;
	}

	hit() {
		if (this.isSunk()) {
			return;
		}
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
