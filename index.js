import { Player } from "./classes/playerClass.js";

const playerHuman = new Player("Paul");
const playerComputer = new Player("Computer", true);

playerHuman.ownBoard.placeShips();
playerComputer.ownBoard.placeShips();
