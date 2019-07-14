export function getUFO(canvas) {
    return {
        type: "rectangle",
        x: 40, y: 40, width: 40, height: 5,
        speedX: 2, speedY: 2,
        maxLeft: 0, maxRight: canvas.width - 40,
        maxUp: 0, maxDown: canvas.height /2,
        color: '#ffff33',
        timer: Date.now() + 3000
    };
}

function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random()* 90) - 45)/10;
    ufo.speedY = (Math.floor(Math.random()* 90) - 45)/10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}

export function updateUFO(ufo) {
    if (Date.now() > ufo.timer) randomize(ufo);
    ufo.x = ufo.x + ufo.speedX;
    ufo.y = ufo.y + ufo.speedY;
    if (ufo.x + ufo.width > ufo.maxRight)
        ufo.speedX = ufo.speedX * -1;
    if (ufo.x < ufo.maxLeft)
        ufo.speedX = ufo.speedX * -1;
    if (ufo.y < ufo.maxUp)
        ufo.speedY = ufo.speedY * -1;
    if (ufo.y + ufo.height > ufo.maxDown)
        ufo.speedY = ufo.speedY * -1;
}