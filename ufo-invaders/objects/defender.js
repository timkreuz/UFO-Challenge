import { EARTH_HEIGHT } from './earth.js';

export function getDefender(canvas) {
    var defender = {
        type: "complex",
        x: canvas.width / 2, y: canvas.height - EARTH_HEIGHT - 50, width: 50, height: 9,
        speedX: 1,
        maxLeft: 0, maxRight: canvas.width - 50,
        display: true,
        parts: []
    };
    defender.parts = getParts(defender);
    return defender;
}

function getParts(defender) {
    
    var top = {
        type: "rectangle",
        x: defender.x, y: defender.y, 
        width: defender.width, height: defender.height / 3,
        display: true,
        color: '#3333ff'
    };
    
    var middle = {
        type: "rectangle",
        x: defender.x, y: top.y + top.height, 
        width: defender.width, height: defender.height / 3,
        display: true,
        color: '#ffff66'
    };

    var bottom = {
        type: "rectangle",
        x: defender.x, y: middle.y + middle.height, 
        width: defender.width, height: defender.height / 3,
        display: true,
        color: '#3333ff'
    };

    var parts = [top, middle, bottom];
    return parts;
}

export function updateDefender(game) {

        var defender = game.defender;

        if (game.events.leftPressed) {
            defender.x = defender.x - defender.speedX;
            if (defender.x < defender.maxLeft) {
                defender.x = defender.maxLeft;
            }
        }

        if (game.events.rightPressed) {
            defender.x = defender.x + defender.speedX;
            if (defender.x  > defender.maxRight) {
                defender.x = defender.maxRight;
            }
        }

        defender.parts = getParts(defender);

}