import {getGame} from './controllers/game.js';
import {drawGame} from './controllers/draw.js';
import {updateGame} from './controllers/update.js';
import {keyDown, keyUp} from './controllers/events.js';

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var game = getGame();

function keyDownHandler(e) {
    keyDown(game, e);
}

function keyUpHandler(e) {
    keyUp(game, e);
}

function runGame() {
    if (game.gameOver) {
        clearInterval(refreshInterval);
    } else {
        updateGame(game);
        drawGame(game);
    }
}

var refreshInterval = setInterval(runGame, 10);