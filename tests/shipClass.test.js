import { describe, it, expect } from "bun:test";
import { Ship } from "../classes/shipClass.js";

describe("Ship", () => {
	it("Should return the correct number of hits taken", () => {
		const ship = new Ship(3);
		ship.hit();

		expect(ship.hits).toBe(1);
	});

	it("Should return true if the number of hits equals the ship's length", () => {
		const ship = new Ship(1);

		expect(ship.isSunk()).toBeTruthy;
	});

	it("Should return false if the number of hits does not equal the ship's length", () => {
		const ship = new Ship(3);

		expect(ship.isSunk()).toBeFalsy;
	});

	it("Should return true when the ship is sunk after being hit", () => {
		const ship = new Ship(1);
		ship.hit();
		expect(ship.isSunk()).toBeTruthy;
	});
});
