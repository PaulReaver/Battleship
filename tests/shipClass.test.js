import { describe, it, expect } from "bun:test";
import { Ship } from "../js/shipClass.js";

describe("Ship", () => {
	it("Should initialize with correct length and hits", () => {
		const ship = new Ship(3);
		expect(ship.length).toBe(3);
		expect(ship.hits).toBe(0);
	});

	it("Should increment hits correctly", () => {
		const ship = new Ship(3);

		ship.hit();
		expect(ship.hits).toBe(1);

		ship.hit();
		expect(ship.hits).toBe(2);
	});

	it("Should return false if not sunk", () => {
		const ship = new Ship(3);

		expect(ship.isSunk()).toBe(false);
	});

	it("Should return true when sunk (length 1)", () => {
		const ship = new Ship(1);
		ship.hit();
		expect(ship.isSunk()).toBe(true);
	});

	it("Should return true when sunk (length > 1)", () => {
		const ship = new Ship(3);
		ship.hit();
		ship.hit();
		ship.hit();
		expect(ship.isSunk()).toBe(true);
	});
});
