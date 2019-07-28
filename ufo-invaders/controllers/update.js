import {updateUFO} from '../objects/ufo.js'; 
import {updateDefender} from '../objects/defender.js';

export function updateGame(game) {
    var ufos = game.ufos.parts;
    for (var i = 0; i < ufos.length; i++){
        updateUFO(ufos[i]);
    }
    updateDefender(game);
}