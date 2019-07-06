import {getBeam, updateBeam, turnOffBeam} from '../objects/beam.js';
export function getUFO(canvas) {
    var ufo = {
        type: "complex",
        x: 40, y: 40, width: 40, height: 5,
        speedX: 2, speedY: 2,
        maxLeft: 5, maxRight: canvas.width - 5,
        maxUp: 5, maxDown: canvas.height /2,
        color: '#ffff33',
        timer: Date.now() + 3000,
        display: true,
        mode: "flying",
        beam: getBeam(canvas),
        parts: []
    };
    ufo.parts = getParts(ufo);
    return ufo;
}

function getParts(ufo) {
    
    var top = {
        type: "rectangle",
        x: ufo.x + (ufo.width / 4), y: ufo.y, width: ufo.width / 2, height: ufo.height / 2,
        display: true,
        color: '#ffff33'
    };

    var bottom = {
        type: "rectangle",
        x: ufo.x, y: ufo.y + (ufo.height / 2), width: ufo.width, height: ufo.height / 2,
        display: true,
        color: '#00ff00'
    };

    var parts = [top, bottom];
    return parts;
}

function randomize(ufo) {

    if (ufo.mode == "pre-abduction") {
        ufo.mode = "abduction";
        ufo.timer = Date.now() + 3000;
    } else if (ufo.mode == "abduction") {
        ufo.mode = "post-abduction";
        ufo.timer = Date.now() + 100;
    } else if (ufo.mode == "post-abduction") {
        ufo.mode = "flying";
        ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
    } else if (ufo.mode == "flying") {
        var r = (Math.floor(Math.random() * 1000))
        if (r <= 100) {
            ufo.mode = "abduction";
            ufo.timer = Date.now() +3000;
        } else {
            ufo.speedX = (Math.floor(Math.random()* 90) - 45)/10;
            ufo.speedY = (Math.floor(Math.random()* 90) - 45)/10;
            ufo.timer = Date.now() + Math.floor(Math.random() * 1000) + 2000;
        }
    }
}

export function updateUFO(ufo) {
    if (Date.now() > ufo.timer) randomize(ufo);

    if (ufo.mode == "flying") {
        ufo.x = ufo.x + ufo.speedX;
        if ((ufo.x + ufo.width > ufo.maxRight) || (ufo.x < ufo.maxLeft)) {
            ufo.speedX = ufo.speedX * -1;
        }

        ufo.y = ufo.y + ufo.speedY;
        if ((ufo.y <= ufo.maxUp) || (ufo.y + ufo.height >= ufo.maxDown)) {
            ufo.speedY = ufo.speedY * -1;
        }

        ufo.parts = getParts(ufo);
    } else if (ufo.mode == "pre-abduction") {
        //do nothing for a few seconds.  
        //later we can make the ufo change colors if we want.
        //also we need to add sounds at some point.  
    } else if (ufo.mode == "abduction") {
        updateBeam(ufo);
    } else if (ufo.mode == "post-abduction") {
        turnOffBeam(ufo);
    }
}