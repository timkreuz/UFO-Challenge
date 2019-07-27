export function getUFOs(canvas, numberOfUFOs) {

    var ufos = {type: "complex", parts: []};

    for (var i = 0; i < numberOfUFOs; i++) {
        var ufo = getUFO(canvas);
        ufos.parts.push(ufo);
    }
    return ufos;
}

function getUFO(canvas) {

    var width = 40;
    var height = 5;
    var ufo = {
        type: "complex",
        x: 40, y: 40, width: width, height: height,
        speedX: 2, speedY: 2,
        maxLeft: 0, maxRight: canvas.width - width,
        maxUp: 0, maxDown: canvas.height /2,
        color: '#ffff33',
        parts: [],
        timer: Date.now() + 3000,
        lightInfo: {number: 3, maxOffset: width / 3, offset: 0, speed: 1.5, color: "#0000ff"}
    };

    ufo.parts = getParts(ufo);

    return ufo;
}

function getParts(ufo) {
                        
    var top = {
        type: "rectangle",
        x: ufo.x + (ufo.width / 4) , y: ufo.y, width: ufo.width / 2, height: ufo.height / 2,
        color: '#ffff33'
    };

    var bottom = {
        type: "rectangle",
        x: ufo.x, y: ufo.y + (ufo.height / 2), width: ufo.width, height: ufo.height / 2,
        color: '#00ff00'
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
                    y: ufo.y + ufo.height /2, width: 6, height: 4, color: info.color};
        lights.parts.push(light);
    } 
    return lights;
}

function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random()* 90) - 45)/10;
    ufo.speedY = (Math.floor(Math.random()* 90) - 45)/10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}

export function updateUFO(ufo) {
    if (Date.now() > ufo.timer) randomize(ufo);

    ufo.x = ufo.x + ufo.speedX;
    if ((ufo.x >= ufo.maxRight) || (ufo.x <= ufo.maxLeft)) {
        ufo.speedX = ufo.speedX * -1;
    }

    ufo.y = ufo.y + ufo.speedY;
    if ((ufo.y <= ufo.maxUp) || (ufo.y >= ufo.maxDown)) {
        ufo.speedY = ufo.speedY * -1;
    }
    ufo.parts = getParts(ufo);
}