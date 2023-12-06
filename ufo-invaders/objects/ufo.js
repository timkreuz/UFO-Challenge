import {EARTH_HEIGHT} from './earth.js';


export function getUFOs(canvas, numberOfUFOs) {

    var ufos = []

    for (var i = 0; i < numberOfUFOs; i++) {
        var ufo = getUFO(canvas)
        ufos.push(ufo)
    }

    return ufos
}



function getUFO(canvas) {
    return {
        type: "rectangle",
        x: 40, y: 40, width: 40, height: 5,
        speedX: 2, speedY: 2,
        maxLeft: 5, maxRight: canvas.width - 5,
        maxUp: 5, maxDown: canvas.height - EARTH_HEIGHT - 5,
        color: '#ffff33',
        timer: Date.now() + 3000
    };
}

function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random()* 90) - 45)/10;
    ufo.speedY = (Math.floor(Math.random()* 90) - 45)/10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
    ufo.color = getRandomColor();
}

export function updateUFO(ufo) {
    if (Date.now() > ufo.timer) randomize(ufo);

    ufo.x = ufo.x + ufo.speedX;
    if ((ufo.x + ufo.width > ufo.maxRight) || (ufo.x < ufo.maxLeft)) {
        ufo.speedX = ufo.speedX * -1;
    }

    ufo.y = ufo.y + ufo.speedY;
    if ((ufo.y < ufo.maxUp) || (ufo.y + ufo.height > ufo.maxDown)) {
        ufo.speedY = ufo.speedY * -1;
    }
}

function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

function getRandomColor() {
    // var h = rand(1, 360);
    // var s = rand(0, 100);
    // var l = rand(0, 100);
    var h = rand(80, 190);
    var s = 100;
    var l = 50;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}
