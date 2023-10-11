export function drawGame(game) {
    drawObjects(game);
}

function drawObjects(game) {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    drawObject(game.ctx, game.earth);
    drawObject(game.ctx, game.sky);
    drawObject(game.ctx, game.ufo);
}

function drawObject(ctx, object) {
    ctx.beginPath();
    ctx.rect(object.x, object.y, object.width, object.height);
    ctx.fillStyle = object.color;
    ctx.fill();
    ctx.closePath();
}