import {getEarth} from './objects/earth.js';
import {getSky} from './objects/sky.js'; 
import {stats} from './objects/stats.js'; 

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var infoCenter = document.getElementById("infoCenter");
var info = infoCenter.getContext("2d");
var earth = getEarth(canvas);
var sky = getSky(canvas);

function displayScore(stats) {
    info.font = "16px Arial";
    info.fillStyle = "#ffffff";
    info.fillText("Score: " + stats.score + "          Abductions: " + stats.abductions +
        "          Aliens Landed: " + stats.visitors, 8, 20);
}

function drawEarth(earth) {
    console.log(earth);
    ctx.beginPath();
    ctx.rect(earth.x, earth.y, earth.width, earth.height);
    ctx.fillStyle = earth.color;
    ctx.fill();
    ctx.closePath();
}

function drawSky(sky) {
    ctx.beginPath();
    ctx.rect(sky.x, sky.y, sky.width, sky.height);
    ctx.fillStyle = sky.color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    if (stats.endOfGame) {
        clearInterval(refreshInterval);
    } else {
        info.clearRect(0, 0, canvas.width, canvas.height);
        displayScore(stats);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawEarth(earth);
        drawSky(sky);
    }
}

var refreshInterval = setInterval(draw(), 10);