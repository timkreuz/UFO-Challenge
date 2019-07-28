export function getUFOs(canvas, numberOfUFOs) {

    var ufos = {type: "complex", parts: []};

    for (var i = 0; i < numberOfUFOs; i++) {
        var ufo = getUFO(canvas, i);
        ufos.parts.push(ufo);
    }
    return ufos;
}

function getUFO(canvas, index) {
    var width = 20;
    var height = 5;
    var ufo = {
        type: "complex",
        x: 40, y: 40, width: width, height: height,
        speedX: 2, speedY: 2,
        maxLeft: 0, maxRight: canvas.width - width,
        maxUp: 0, maxDown: canvas.height * .75,
        color: getUFOColor(index),
        parts: [],
        timer: Date.now() + 3000,
        lightInfo: {number: 3, maxOffset: width / 3, offset: 0, speed: 1.5, color: getRandomColor()}
    };

    ufo.parts = getParts(ufo);

    return ufo;
}

function getParts(ufo) {
                        
    var top = {
        type: "rectangle",
        x: ufo.x + (ufo.width / 4) , y: ufo.y, width: ufo.width / 2, height: ufo.height / 2,
        color: ufo.color
    };

    var bottom = {
        type: "rectangle",
        x: ufo.x, y: ufo.y + (ufo.height / 2), width: ufo.width, height: ufo.height / 2,
        color: getRandomColor()
    };

    var lights = getLights(ufo);

    var parts = [top, bottom, lights];
    return parts;
}

function getLights(ufo) {

    var info = ufo.lightInfo;
    info.offset = info.offset + info.speed;
    if (info.offset > info.maxOffset) {
        info.offset = 0;
    }

    var lights = {type: "complex", parts: []};

    for (var i = 0; i < info.number; i++) {
        var light = {type: "rectangle", x: ufo.x + (i * info.maxOffset) + info.offset, 
                    y: ufo.y + ufo.height /2, width: 3, height: 2, color: info.color};
        lights.parts.push(light);
    } 
    return lights;
}

function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random() * 40) - 20)/10;
    ufo.speedY = (Math.floor(Math.random() * 40) - 20)/10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}

export function updateUFO(ufo) {
    if (Date.now() > ufo.timer) randomize(ufo);

    ufo.x = ufo.x + ufo.speedX;
    if ((ufo.x <= ufo.maxLeft) && (ufo.speedX < 0)) {
        ufo.speedX = ufo.speedX * -1;
    } else if ((ufo.x >= ufo.maxRight) && (ufo.speedX > 0)) {
        ufo.speedX = ufo.speedX * -1;
    }

    ufo.y = ufo.y + ufo.speedY;
    if ((ufo.y <= ufo.maxUp) && (ufo.speedY < 0)) {
        ufo.speedY = ufo.speedY * -1;
    } else if ((ufo.y >= ufo.maxDown) && (ufo.speedY > 0)) {
        ufo.speedY = ufo.speedY * -1;
    }
    ufo.parts = getParts(ufo);
}


function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

function getRandomColor() {
    // var h = rand(1, 360);
    // var s = rand(0, 100);
    // var l = rand(0, 100);
    var h = rand(0, 105);
    var s = 100;
    var l = 50;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function getUFOColor(index) {
    // var h = rand(1, 360);
    // var s = rand(0, 100);
    // var l = rand(0, 100);
    var h = index * 10;
    var s = 100;
    var l = 50;
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}