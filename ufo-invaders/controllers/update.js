import {updateUFO} from '../objects/ufo.js'; 
import {updateDefender} from '../objects/defender.js';
import { updateStunners } from '../objects/stunners.js';

export function updateGame(game) {
    updateStunners(game);
    var ufos = game.ufos.parts;
    for (var i = 0; i < ufos.length; i++){
        updateUFO(ufos[i], game.stunners.parts);
    }
    updateDefender(game);
}