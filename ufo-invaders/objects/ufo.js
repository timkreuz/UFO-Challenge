export function getUFOs(canvas, numberOfUFOs) {

    var ufos = { type: "complex", parts: [] };

    for (var i = 0; i < numberOfUFOs; i++) {
        var ufo = getUFO(canvas, i);
        ufos.parts.push(ufo);
    }
    return ufos;
}

function getUFO(canvas, index) {
    var width = 16;
    var height = 4;
    var ufo = {
        type: "complex",
        mode: "flying",
        x: 40, y: 40, width: width, height: height,
        speedX: 2, speedY: 2,
        maxLeft: 0, maxRight: canvas.width - width,
        maxUp: 0, maxDown: canvas.height * .75,
        color: getUFOColor(index),
        parts: [],
        timer: Date.now() + 3000,
        lightInfo: { number: 3, maxOffset: width / 3, offset: 0, speed: 1.5, color: getRandomColor() }
    };

    ufo.parts = getParts(ufo);

    return ufo;
}

function getParts(ufo) {

    var top = {
        type: "rectangle",
        x: ufo.x + (ufo.width / 4), y: ufo.y, width: ufo.width / 2, height: ufo.height / 2,
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

    var lights = { type: "complex", parts: [] };

    for (var i = 0; i < info.number; i++) {
        var light = {
            type: "rectangle", x: ufo.x + (i * info.maxOffset) + info.offset,
            y: ufo.y + ufo.height / 2, width: 3, height: 2, color: info.color
        };
        lights.parts.push(light);
    }
    return lights;
}

function randomize(ufo) {
    ufo.speedX = (Math.floor(Math.random() * 40) - 20) / 10;
    ufo.speedY = (Math.floor(Math.random() * 40) - 20) / 10;
    ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
}

export function updateUFO(ufo, stunners) {
    if (ufo.mode == "flying") {
        updateFlyingUFO(ufo, stunners);
    } else if (ufo.mode == "leaving") {
        updateLeavingUFO(ufo);
    }
}

function updateFlyingUFO(ufo, stunners) {

    if (ufo.display == null || ufo.display) {
        if (isCollision(ufo, stunners)) {
            ufo.mode = "leaving";
            ufo.speedY = -8.0;
        } else {

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
    }
}

function updateLeavingUFO(ufo) {

    ufo.x = ufo.x + ufo.speedX;
    ufo.y = ufo.y + ufo.speedY;
    ufo.parts = getParts(ufo);

    if (ufo.y < -20) {
        ufo.mode = "gone";
        ufo.display = "false";
    }
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

function isCollision(ufo, stunners) {
    var hit = false;

    for (var i = 0; i < stunners.length; i++) {
        var stunner = stunners[i];
        if (stunner.display) {
            var stunner = stunners[i];
            if (objectsOverlap(stunner, ufo)) {
                hit = true;
                stunner.display = false;
                break;
            }
        }
    }

    return hit;
}

function objectsOverlap(o1, o2) {

    var o1Left = o1.x;
    var o1Right = o1.x + o1.width;
    var o1Top = o1.y;
    var o1Bottom = o1.y + o1.height;

    var o2Left = o2.x;
    var o2Right = o2.x + o2.width;
    var o2Top = o2.y;
    var o2Bottom = o2.y + o2.height;

    var xOverlap = (o1Left >= o2Left && o1Left <= o2Right) ||
        (o1Right >= o2Left && o1Right <= o2Right);
    var yOverlap = (o1Top <= o2Bottom && o1Top >= o2Top) ||
        (o1Bottom <= o2Bottom && o1Bottom >= o2Top);

    return xOverlap && yOverlap;
}