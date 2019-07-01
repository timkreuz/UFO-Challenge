import {getGame} from './controllers/game.js';
import {drawGame} from './controllers/draw.js';
import {updateGame} from './controllers/update.js';

var game = getGame(document);

function runGame() {
    if (game.gameOver) {
        clearInterval(refreshInterval);
    } else {
        updateGame(game);
        drawGame(game);
    }
}

var refreshInterval = setInterval(runGame, 10);