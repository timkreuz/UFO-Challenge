export function keyDown(game, e) {
    if (e.keyCode == 38) {
        game.events.upPressed = true;
    }
    else if (e.keyCode == 40) {
        game.events.downPressed = true;
    }
    else if (e.keyCode == 37) {
        game.events.leftPressed = true;
    }
    else if (e.keyCode == 39) {
        game.events.rightPressed = true;
    }
    else if (e.keyCode == 32) {
        game.events.spacePressed = true;
    }
}

export function keyUp(game, e) {
    if (e.keyCode == 38) {
        game.events.upPressed = false;
    }
    else if (e.keyCode == 40) {
        game.events.downPressed = false;
    }
    else if (e.keyCode == 37) {
        game.events.leftPressed = false;
    }
    else if (e.keyCode == 39) {
        game.events.rightPressed = false;
    }
    else if (e.keyCode == 32) {
        game.events.spacePressed = false;
    }

}