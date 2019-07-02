export function drawGame(game) {
    displayScore(game);
    drawObjects(game);
}

function displayScore(game) {
    console.log(game);
    game.infoCtx.clearRect(0, 0, game.infoCenter.width, game.infoCenter.height);
    game.infoCtx.fillStyle = "#ffffff";
    game.infoCtx.fillText("Score: " + game.stats.score + "          Abductions: " + game.stats.abductions +
        "          Aliens Landed: " + game.stats.visitors, 8, 20);
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