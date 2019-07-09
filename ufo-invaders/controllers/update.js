import {updateUFO} from '../objects/ufo.js'; 
import {updateDefender} from '../objects/defender.js';

export function updateGame(game) {
    for (var i = 0; i < game.ufos.length; i++) {
        updateUFO(game.ufos[i]);
        updateDefender(game);
    }
}