import {updateUFO} from '../objects/ufo.js'; 

export function updateGame(game) {
    for (var i = 0; i < game.ufos.length; i++) {
        updateUFO(game.ufos[i]);
    }
}