export function getStunners(maxStunners) {

    var stunners = {type: "complex", parts: []};

    for (var i = 0; i < maxStunners; i++) {
        var stunner = getStunner();
        stunners.parts.push(stunner);
    }

    return stunners;
}

function getStunner() {
    return {type: "rectangle", display: false, speed: 2, x: 0, y: 0, width: 4, height: 4, color: "#0000ff"}
}

export function updateStunners(game) {
    if (game.events.spacePressed) {
        generateNewStunner(game);
        game.events.spacePressed = false;
    }

    moveStunners(game);
}

function moveStunners(game) {

    var stunners = game.stunners;
    for (var i = 0; i < stunners.parts.length; i ++) {
        var stunner = stunners.parts[i];
        if (stunner.display) {
            stunner.y = stunner.y - stunner.speed;
            if (stunner.y <= 0) stunner.display = false;
        }
    }
}


function generateNewStunner(game) {
    var defender = game.defender;
    var stunners = game.stunners;
    for (var i = 0; i < stunners.parts.length; i++) {
        var stunner = stunners.parts[i];
        if (stunner.display == false) {
            stunner.x = defender.x + defender.width / 2 - stunner.width / 2;
            stunner.y = defender.y + stunner.height;
            stunner.display = true;
            break;
        }
    }
}