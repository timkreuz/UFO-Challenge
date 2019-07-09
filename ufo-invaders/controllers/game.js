import { getEarth } from '../objects/earth.js';
import { getSky } from '../objects/sky.js';
import { getUFO } from '../objects/ufo.js';
import { getDefender } from '../objects/defender.js';
import { getStats } from '../objects/stats.js';

export function getGame() {
    var stats = getStats();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var infoCenter = document.getElementById("infoCenter");
    var infoCtx = infoCenter.getContext("2d");
    var earth = getEarth(canvas);
    var sky = getSky(canvas);
    var ufos = getUFOs(canvas);
    var beams = getBeams(ufos);
    var defender = getDefender(canvas);
    var events = {upPressed: false, downPressed: false, leftPressed: false, rightPressed: false,
                  spacePressed:false};

    var game = {
        gameOver: false,
        infoCenter: infoCenter, infoCtx: infoCtx,
        canvas: canvas, ctx: ctx,
        stats: stats,
        earth: earth, sky: sky, ufos: ufos, beams: beams, defender: defender,
        events: events
    };
    return game;
}

function getUFOs(canvas) {
    var ufos = [];
    for (var i = 0; i < 5; i++) {
        ufos.push(getUFO(canvas));
    }
    return ufos;
}

function getBeams(ufos) {
    var beams = [];
    for (var i = 0; i < ufos.length; i++) {
        beams.push(ufos[i].beam);
    }
    return beams;
}