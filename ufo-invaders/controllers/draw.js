export function drawGame(game) {
    displayScore(game);
    drawObjects(game);
}

function displayScore(game) {
    game.infoCtx.clearRect(0, 0, game.infoCenter.width, game.infoCenter.height);
    game.infoCtx.fillStyle = "#ffffff";
    game.infoCtx.fillText("Score: " + game.stats.score + "          Abductions: " + game.stats.abductions +
        "          Aliens Landed: " + game.stats.visitors, 8, 20);
}

function drawObjects(game) {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    drawObject(game.ctx, game.earth);
    drawObject(game.ctx, game.sky);
    drawComplex(game.ctx, game.ufos);
    // console.log(game.beams);
    drawComplex(game.ctx, game.beams);
}

function drawObject(ctx, object) {
    if (object.display) {
        if (object.type == "rectangle") {
            drawRectangle(ctx, object);
        }
        if (object.type == "complex") {
            drawComplex(ctx, object.parts)
        }
    }
}

function drawRectangle(ctx, object) {
    ctx.beginPath();
    ctx.rect(object.x, object.y, object.width, object.height);
    ctx.fillStyle = object.color;
    ctx.fill();
    ctx.closePath();
}

function drawComplex(ctx, parts) {
    for (var i = 0; i < parts.length; i++) {
        drawObject(ctx, parts[i]);
    }
}

