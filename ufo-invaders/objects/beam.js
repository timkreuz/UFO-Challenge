import { EARTH_HEIGHT } from './earth.js';
export function getBeam(canvas, ufo) {

    var beam = {
        type: "complex",
        x: 1, y: 1, width: 4, height: 1,
        ground: canvas.height - EARTH_HEIGHT,  
        display: false,
        parts: []
    };
    beam.parts = getParts(beam, ufo);
    return beam;
}

function getParts(beam, ufo) {
    
    var b = {
        type: "rectangle",
        x: beam.x, y: beam.y, width: beam.width, height: beam.height,
        color: '#ff00ff', display: true
    };

    var millisecondsRemaining = ufo.timer - Date.now();
    var percentRemaining = millisecondsRemaining / 3000;
    var abducteeY = beam.y + (beam.height * percentRemaining);
    console.log(beam.y);
    console.log(beam.height);
    var abductee = {
        type: "rectangle",
        x: beam.x, y: abducteeY, width: beam.width, height: beam.width,
        color: '#000000', display: true
    };

    var parts = [b, abductee];
    return parts;
}

export function updateBeam(ufo) {
    var beam = ufo.beam;
    beam.display = true;
    beam.x = ufo.x + (ufo.width / 2) - (beam.width/2);
    beam.y = ufo.y + ufo.height;
    beam.height = beam.ground - beam.y;
    beam.parts = getParts(beam, ufo);
}

export function turnOffBeam(ufo) {
    ufo.beam.display = false;
}