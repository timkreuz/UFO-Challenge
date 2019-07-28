import {getEarth} from '../objects/earth.js';
import {getSky} from '../objects/sky.js'; 
import {getUFOs} from '../objects/ufo.js'; 
import {getDefender } from '../objects/defender.js';
import {getStunners } from '../objects/stunners.js';
import {getStats} from '../objects/stats.js'; 

export function getGame() {
    var stats = getStats();
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var infoCenter = document.getElementById("infoCenter");
    var infoCtx = infoCenter.getContext("2d");
    var earth = getEarth(canvas);
    var sky = getSky(canvas);
    var defender = getDefender(canvas);
    var ufos = getUFOs(canvas,99);
    var stunners = getStunners(10);
    var events = {upPressed: false, downPressed: false, leftPressed: false, rightPressed: false,
                  spacePressed:false};

    var game = {gameOver: false,
                infoCenter: infoCenter, infoCtx: infoCtx,
                canvas: canvas, ctx: ctx,
                stats: stats,
                earth: earth, sky: sky, defender: defender, ufos: ufos, stunners: stunners,
                events: events};
    return game;
}