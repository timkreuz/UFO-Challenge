import {getEarth} from '../objects/earth.js';
import {getSky} from '../objects/sky.js';
import {getUFO} from '../objects/ufo.js';
import {getStats} from '../objects/stats.js';

export function getGame() {
var stats = getStats();
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var infoCenter = document.getElementById("infoCenter");
var infoCtx = infoCenter.getContext("2d");
var earth = getEarth(canvas);
var sky = getSky(canvas);
var ufo = getUFO(canvas);

var game = {gameOver: false,
infoCenter: infoCenter, infoCtx: infoCtx,
canvas: canvas, ctx: ctx,
stats: stats,
earth: earth, sky: sky, ufo: ufo};
return game;
}