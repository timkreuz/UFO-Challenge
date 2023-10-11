import {getGame} from './control/game.js';
import {drawGame} from './control/draw.js';
import {updateGame} from './control/update.js';

var game = getGame();

function runGame() {
    
    if (game.gameOver) {
        clearInterval(refreshInterval);
    } else {
        updateGame(game)
        drawGame(game)
    }
}

var refreshInterval = setInterval(runGame, 10);